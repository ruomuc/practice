#include <node_api.h>
#include <string.h>
#include "xlsxwriter.h"

napi_value Init(napi_env env, napi_value exports)
{
  napi_value nHello;
  char *hello = "hello, world";

  napi_create_string_utf8(env, hello, strlen(hello), &nHello);
  napi_set_named_property(env, exports, "hello", nHello);

  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
