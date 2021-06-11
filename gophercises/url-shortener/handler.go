package urlshort

import (
	"gopkg.in/yaml.v2"
	"net/http"
)

func MapHandler(pathsToUrls map[string]string, fallback http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path
		if p, ok := pathsToUrls[path]; ok {
			http.Redirect(w, r, p, http.StatusFound)
		}
		fallback.ServeHTTP(w, r)
	}
}

func YAMLHandler(yml []byte, fallback http.Handler) (http.HandlerFunc, error) {
	pathsUrls, err := parseYaml(yml)
	if err != nil {
		return nil, err
	}
	pathsToUrls := buildMap(pathsUrls)
	return MapHandler(pathsToUrls, fallback), nil
}

func buildMap(pathsUrls []pathUrl) map[string]string {
	pathsToUrls := make(map[string]string)
	for _, p := range pathsUrls {
		pathsToUrls[p.Path] = p.URL
	}
	return pathsToUrls
}

func parseYaml(data []byte) ([]pathUrl, error) {
	var pathUrls []pathUrl
	err := yaml.Unmarshal(data, &pathUrls)
	if err != nil {
		return nil, err
	}
	return pathUrls, nil
}

type pathUrl struct {
	Path string
	URL  string
}
