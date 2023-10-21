##### **2.6**复习题

1. c++程序的模块叫什么？

>  函数

2. 下面的预处理器编译命令是干什么用的？

`#include <iostream>;`

> 在最终编译之前，使用 iostream 文件内容替换该编译命令。

3. 下面的语句是做什么用的？

`using namespace std;`

> 使程序可以使用 std 名称空间中的定义。

4. 什么语句可以用来打印短语 "Hello,World"，然后开始新的一行？

```c++
cout << "Hello,World" << endl;
```

5. 什么语句可以用来创建名为 cheeses 的整数变量？

```c++
int cheeses;
```

6. 什么语句可以用来将值 32 赋给变量 cheeses ？

```c++
cheeses = 32;
```

7. 什么语句可以用来将从键盘输入的值，读入变量 cheeses 中？

```c++
cin >> cheeses;
```

8. 什么语句可以用来打印 "We have X varieties of cheese."，其中 X 为变量 cheeses 的当前值。

```c++
cout << "We have "
  	 << cheeses
     << " varieties of cheese."
```

9. 下面函数原型指出了关于函数的哪些信息？

```
int froop(double t);

void rattl(int n);

int prune(void);
```

> 函数返回值类型、函数名称、函数参数和类型。

10. 在定义函数时，什么情况下不比使用关键字 return？

> 当函数返回类型为 void 时，不用在函数中使用 return。



##### 2.7编程练习

1. 编写一个 c++ 程序，它显示您的姓名和地址。

```c++

#include "iostream"

int main() {
    using namespace std;
    cout << "name: ruomu" << endl;
    cout << "address: china";
}
```

2. 编写一个 c++ 程序，它要求用户输入一个以 long 为单位的距离，然后将它转为码（1 long 等于 200 码）

```c++
#include "iostream"

int convert(int);

int main() {
    using namespace std;

    int l;
    cin >> l;
    cout << convert(l) << endl;
}

int convert(int l) {
    return l * 220;
}
```

3. 编写一个 c++ 程序，它使用3个用户定义的函数（包括 main()），并生成下面的输出：

```
Three blind mice
Three blind mice
See how they run
See how they run
```

​	其中一个函数要调用两次，该函数生成前两行；另一个函数也被调用两次，并生成其余的输出。

```c++
#include "iostream"

void mice();
void miceRun();

int main() {
    mice();
    mice();
    miceRun();
    miceRun();
}

void mice() {
    std::cout << "Three blind mice" << std::endl;
}

void miceRun() {
    std::cout << "See how they run" << std::endl;
}
```

4. 编写一个程序，让用户输入其年龄，然后显示该年龄包含多少个月，如下所示：

```
Enter you age: 29
```

```c++
#include "iostream"

int yearToMonth(int);

int main() {
    int year;
    std::cin >> year;
    std::cout << "Enter you age: " << yearToMonth(year) << std::endl;
}

int yearToMonth(int y) {
    return y * 12;
}
```

5. 编写一个程序，其中的 main() 调用一个用户自定义函数（以摄氏温度值为参数，并返回相应的华氏温度值）。该程序按下面的格式要求用户输入摄氏温度值，并显示结果：

```
Please enter a Celsius value: 20
"20 degrees Celsius is 68 degrees Fahrenheit"
```


   下面是转换公式

   华氏温度 = 1.8 * 摄氏温度 + 32.0

```c++
#include "iostream"

double convert(int);

int main() {
    std::cout << "Please enter a Celsius value: ";
    int c;
    std::cin >> c;
    std::cout << c << " degrees Celsius is " << convert(c) << " degrees Fahrenheit" << std::endl;
}

double convert(int c) {
    return 1.8 * c + 32.0;
}
```

6. 编写一个程序，其 main() 调用一个用户定义的函数（以光年值为参数，并返回对应天文单位的值）。该程序按下面的格式要求用户输入光年值，并显示结果：

   ```
   Enter the number of light years：4.2
   4.2 light years = 265608 astronomical units.
```
   
天文单位是从地球到太阳的平均距离（约150000000 公里 或 93000000 英里），光年是光走一年的距离（约10万亿公里或6万亿英里）（除太阳外，最近的恒星大约离地球4.2光年）。请使用 double 类型（参见程序清单2.4），转换公式为：
   
1 光年 = 63240 天文单位

```c++
#include "iostream"

double convert(double);

int main() {
    std::cout << "Enter the number of light years：";
    double ly;
    std::cin >> ly;
    std::cout << ly << " light years = " << convert(ly) << " astronomical units." << std::endl;
}

double convert(double ly) {
    return ly * 63240;
}
```

7. 编写一个程序，要求用户输入小时数和分钟数。在 main() 函数中，将这两个值传递给一个 void 函数，后者以下面这样的格式显示这两个值：

```
Enter the number of hours: 9
Enter the number of minutes: 28
Time: 9:28
```

```c++
#include "iostream"

int main() {
    int hour;
    int minutes;
    std::cout << "Enter the number of hours:";
    std::cin >> hour;
    std::cout << "Enter the number of minutes:";
    std::cin >> minutes;
    std::cout << "Time:" << hour << ":" << minutes << std::endl;
}
```

##### 3.6复习题

1. c++为什么有多种整型？

> 为了保存不同大小的整数，可以根据需求来选择合适的类型，提高计算效率。

2. 声明与以下描述相符的变量。

- short 整数，值为80

- unsigned int 整数，值为42110
- 值为 3000000000 的整数

```c++
short n = 80;
unsigned int n = 42110;
unsigned long n = 3000000000;
```

3. c++提供了什么措施来防止超出整型的范围？

> c++没有提供自动防止超出整型限制的功能，可以使用头文件 climits 来查看限制情况。

3. 33L和33之间有什么区别？

> 33L是long 类型， 33是int类型，可以保存的整数位数不一样。

3. 下面两条c++语句是否等价？

   1. char grade = 65;

   1. char grade = 'A';

> 不完全等价
>
> 只有在使用 ASCII 编码的系统上，第一条语句的 grade 设置为了字母 A

6. 如何使用c++来找出编码88表示的字符？指出至少两种方法。

```c++
// 1.
char c = 88;
cout << c << endl;
// 2.
cout.put(char(88));
// 3.
cout << char(88) << endl; // c++的写法，推荐
// 4.
cout << (char)88 << endl; // c的写法，不推荐
```

6. 将 long 值赋给 float 变量会导致舍入误差，将 long 值赋给 double 变量呢？将 long long 值赋给 double 变量呢？

> long值赋给double会不有误差
>
> long long 值赋给double 会有误差
>
> 因为，long 值最大表示 2147483648，有效位数10位；double有效位数16位；long long 有效位数有19位。
>
> 精度低的类型赋值给精度高的类型，不会有误差。

6. 下列 c++ 表达式的结果分别是多少？

- 8 * 9 + 2
- 6 * 3 / 4
- 3 / 4 * 6
- 6.0 * 3 / 4
- 15 % 4

```
74
4
0
4.5
3
```

9. 假设 x1 和 x2 是两个 double 变量，您要将它们作为整数相加，再将结果赋给一个整型变量。请编写一条完成这项任务的c++语句。如果要将它们作为 double 值相加并转换为 int 呢？

```c++
// 1.作为整数相加，再将结果赋给一个整型变量
int n ;
n = int(x1) + int(x2);

// 2.作为 double 值相加并转换为 int
int n ;
n = x1 + x2;
```

10. 下面每条语句声明的变量都是什么类型？

- auto cars = 15
- auto iou = 150.37f
- auto level = 'B'
- auto crat =  U'/U00002155'
- auto fract = 8.25f / 2.5

```
int
float
char
char32_t
double
```

##### 3.7编程练习

1. 编写一个小程序，要求用户使用一个整数指出自己的身高（单位为英寸），然后将身高转换为英尺和英寸。该程序使用下划线字符来指示输入位置。另外，使用一个const符号常量来表示转换因子。

```c++
#include "iostream"

int main() {
    using namespace std;

    int height;
    cout << "Enter you height: ___\b\b\b";
    cin >> height;

    const int factor = 12;

    int feet = height / 12;
    int inches = height % 12;
    cout << "You height is " << feet << " feet and " << inches << " inches" << endl;
}
```

2. 编写一个小程序，要求以几英尺几英寸的方式输入其身高，并以磅为单位输入其体重。（使用3个变量来存储这些信息。）该程序报告其BMI（Body Mass Index，体重指数）。为了计算BMI， 该程序以英寸的方式指出用户的身高（1英尺为12英寸），并将以英寸为单位的身高转换为以米为单位的身高（1英寸=0.0254米）。然后，将以磅为单位的体重转换为以千克为单位的体重（1千克=2.2磅）。最后，计算相应的BMI——体重（千克）除以身高（米）的平方。用符号常量表示各种转换因子

```c++
#include "iostream"

int main() {
    using namespace std;

    cout << "Please enter you height with feet：__\b\b";
    int ft;
    cin >> ft;

    cout << "Please enter you height with inches：__\b\b";
    int ic;
    cin >> ic;

    cout << "Please enter you weight with pound：___\b\b\b";
    int weight;
    cin >> weight;

    const int ft_factor = 12;
    const double height_factor = 0.0254;
    const double weight_factor = 2.2;

    double finally_height = (ft * ft_factor + ic) * height_factor;
    double finally_weight = weight / weight_factor;
    cout << "Finally height = " << finally_height << " m" << endl;
    cout << "Finally weight = " << finally_weight << " kg" << endl;

    double BIM = finally_weight / finally_height;
    cout << "You BIM = " << BIM << endl;
}
```

3. 编写一个程序，要求用户以度、分、秒的方式输入一个纬度，然后以度为单位显示该纬度。1度为60分，1分等于60秒，请以符号常量的方式表示这些值。对于每个输入值，应使用一个独立的变量存储它。下面是该程序运行时的情况：

```
Enter a latitude in degrees, minutes, and seconds:
First, enter the degrees: 37
Next, enter the minutes of arc: 51
Finally, enter the seconds of arc: 19
37 degrees, 51 minutes, 19seconds = 37.8553 degrees
```

```c++
#include "iostream"

int main() {
    using namespace std;

    cout << "Enter a latitude in degrees, minutes, and seconds: \n";
    cout << "First, enter the degrees: ";
    int degrees;
    cin >> degrees;
    cout << "Next, enter the minutes of arc: ";
    int minutes;
    cin >> minutes;
    cout << "Finally, enter the seconds of arc: ";
    int seconds;
    cin >> seconds;

    const int factor = 60;
    cout << degrees << " degrees, ";
    cout << minutes << " minutes,";
    cout << seconds << " seconds ";
    cout << degrees + (double(minutes) / 60) + (double(seconds) / 60 / 60) << "= 37.8553 degrees\n";
}

```

4. 编写一个程序，要求用户以整数方式输入秒数（使用long或long long变量存储），然后以天、小时、分钟和秒的方式显示这段时间。使用符号常量来表示每天有多少小时、每小时有多少分钟以及每分钟有多少秒。该程序的输出应与下面类似：

```
Enter the number of seconds: 3160000
316000 seconds = 365 days, 17 hours, 46 minutes, 40 seconds
```
```c++
#include "iostream"

int main() {
    using namespace std;

    cout << "Enter the number of seconds: ";
    long long seconds;
    cin >> seconds;

    const int second_to_minutes = 60;
    const int minutes_to_hour = 60;
    const int hour_to_day = 24;

    int minutes = seconds / second_to_minutes;
    seconds = seconds % second_to_minutes;
    int hours = minutes / minutes_to_hour;
    minutes = minutes % minutes_to_hour;
    int day = hours / hour_to_day;
    hours = hours % hour_to_day;


    cout << seconds << " = ";
    cout << day << " days, ";
    cout << hours << " hours, ";
    cout << minutes << " minutes, ";
    cout << seconds << " seconds. \n";
}
```

5.  编写一个程序，要求用户输入全球当前的人口和美国当前的人口（或其他国家的人口）。将这些信息存储在long long变量中，并让程序显示美国（或其他国家）的人口占全球人口的百分比。该程序的输出应与下面类似：

```
Enter the world's population: 6898758899
Enter the population of the US: 310783781
The population of the US is 4.50492% of the world population.
```
```c++
#include "iostream"

int main() {
    using namespace std;

    int world_people, us_people;
    cout << "Enter the world's population: ";
    cin >> world_people;
    cout << "Enter the population of the US: ";
    cin >> us_people;
    double percentage_of_world = double(us_people) / double(world_people) * 100;
    cout << "The population of the US is " << percentage_of_world << "% of the world population.\n";
}
```

6. 编写一个程序，要求用户输入驱车里程（英里）和使用汽油量（加仑），然后指出汽车耗油量为一加仑的里程。如果愿意，也可以让程序要求用户以公里为单位输入距离，并以升为单位输入汽油量，然后指出欧洲风格的结果——即每100公里的耗油量（升）。

```c++
#include "iostream"

int main() {
    using namespace std;

    cout << "Enter kilometers: ";
    double kilo;
    cin >> kilo;
    cout << "Enter oil: ";
    double oil;
    cin >> oil;

    double oil_per_100_kilo = oil / kilo * 100;
    cout << "Per 100 km cost " << oil_per_100_kilo << " litre\n";
}
```

7. 编写一个程序，要求用户按欧洲风格输入汽车的耗油量（每100公里消耗的汽油量（升）），然后将其转换为美国风格的耗油量——每加仑多少英里。注意，除了使用不同的单位计量外，美国方法（距离/燃料）与欧洲方法（燃料/距离）相反。100公里等于62.14英里，1加仑等于3.875升。因此，19mpg大约合12.41/100km，127mpg大约合8.71/100km。

```c++
#include "iostream"

int main() {
    using namespace std;

    cout << "Enter per 100 km cost oil (litre) : ";
    double litre;
    cin >> litre;

    const double gallon = litre / 3.875;

    cout << litre << "l/100km = " << 62.14 / gallon << "mpg" << endl;
}
```

