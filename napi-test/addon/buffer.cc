#include <napi.h>

namespace __node_addon_api_buffer
{
  void UseBuffer(const Napi::CallbackInfo &info)
  {
    Napi::Env env = info.Env();

    // 获取传递给函数的Buffer
    Napi::Object bufferObj = info[0].As<Napi::Object>();
    int rot = info[1].As<Napi::Number>().Uint32Value();

    // 获取Buffer的信息
    void *data;
    size_t length;
    napi_status status = napi_get_buffer_info(env, bufferObj, &data, &length);

    if (status != napi_ok)
    {
      Napi::TypeError::New(env, "Failed to get buffer info").ThrowAsJavaScriptException();
      return;
    }

    // 直接在C++中操作Buffer的数据
    unsigned char *buffer = static_cast<unsigned char *>(data);
    for (size_t i = 0; i < length; i++)
    {
      buffer[i] += rot;
    }
  }

  Napi::Object Initialize(Napi::Env env, Napi::Object exports)
  {
    exports.Set(Napi::String::New(env, "useBuffer"), Napi::Function::New(env, UseBuffer));
    return exports;
  }

  NODE_API_MODULE(addon, Initialize)
}
