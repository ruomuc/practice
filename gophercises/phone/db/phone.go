package db

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

const (
	//host     = "localhost"
	//port     = 3306
	//user     = "root"
	//password = "root1234"
	//dbname   = "gophercises_phone"

	host     = "81.69.219.4"
	port     = 53306
	user     = "root"
	password = "rootroot"
	dbname   = "gophercises_phone"
)

type DB struct {
	db *sql.DB
}

func Open(driverName string, dbname string) (*DB, error) {
	sqlInfo := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8", user, password, host, port, dbname)
	db, err := sql.Open(driverName, sqlInfo)
	if err != nil {
		return nil, err
	}
	return &DB{db}, nil
}

func (db *DB) Close() error {
	return db.db.Close()
}

func (db *DB) SeedData() error {
	data := []string{
		"1234567890",
		"1234567-890",
		"(123), 456 7892",
		"123 - 456 - 7894",
		"12345@67892",
	}

	for _, d := range data {
		if _, err := insertPhone(db.db, d); err != nil {
			return err
		}
	}
	return nil
}

func (db *DB) DropPhoneNumbersTable() error {
	_, err := db.db.Exec("DROP TABLE IF EXISTS phone_numbers")
	if err != nil {
		return err
	}
	return nil
}

func (db *DB) CreatePhoneNumbersTable() error {
	statement := fmt.Sprintf(`
	CREATE TABLE IF NOT EXISTS phone_numbers(
		id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'id',
		number VARCHAR(255) DEFAULT '' COMMENT '电话号码',
		PRIMARY KEY (id)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='电话簿'
`)
	_, err := db.db.Exec(statement)
	if err != nil {
		return err
	}
	return nil
}

func insertPhone(db *sql.DB, phone string) (int, error) {
	statement := fmt.Sprint("INSERT INTO phone_numbers(number) VALUES(?)")
	res, err := db.Exec(statement, phone)
	if err != nil {
		return -1, err
	}

	id, err := res.LastInsertId()
	if err != nil {
		return -1, err
	}

	return int(id), nil
}

type Phone struct {
	ID     int
	Number string
}

func (db *DB) UpdatePhone(p Phone) error {
	statement := fmt.Sprint("UPDATE phone_numbers SET number =  ? where id = ?")
	_, err := db.db.Exec(statement, p.Number, p.ID)
	if err != nil {
		return err
	}
	return nil
}

func (db *DB) DeletePhone(id int) error {
	statement := fmt.Sprint("DELETE FROM phone_numbers where id = ?")
	_, err := db.db.Exec(statement, id)
	if err != nil {
		return err
	}
	return nil
}

func (db *DB) FindPhoneByNumber(number string) (bool, error) {
	var p Phone
	row := db.db.QueryRow(fmt.Sprint("SELECT * FROM  phone_numbers WHERE number = ?"), number)
	err := row.Scan(&p.ID, &p.Number)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil
		} else {
			return false, err
		}
	}
	return p.ID > 0, nil
}

func (db *DB) AllPhones() (results []Phone, err error) {
	rows, err := db.db.Query(fmt.Sprint("SELECT * FROM phone_numbers"))
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var p Phone
		if err := rows.Scan(&p.ID, &p.Number); err != nil {
			return nil, err
		}
		results = append(results, p)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return results, nil
}

func (db *DB) GetPhone(id int) (string, error) {
	var number string
	row := db.db.QueryRow(fmt.Sprint("SELECT * FROM  phone_numbers WHERE id = ?"), id)
	err := row.Scan(&id, &number)
	if err != nil {
		return "", err
	}
	return number, nil
}
