{
    "targets": [
        {
            "target_name": "hello",
            "cflags!": ["-fno-exceptions"],  # -fno-exceptions 忽略掉编译过程中的一些报错
            "cflags_cc!": ["-fno-exceptions"],
            "sources": ["addon/hello.cc"],
            "include_dirs": [  # 头文件搜索路径，这样通过#include <napi.h>就可以引入napi
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"],
        },
        {
            "target_name": "buffer-test",
            "cflags!": ["-fno-exceptions"],  # -fno-exceptions 忽略掉编译过程中的一些报错
            "cflags_cc!": ["-fno-exceptions"],
            "sources": ["addon/buffer.cc"],
            "include_dirs": [  # 头文件搜索路径，这样通过#include <napi.h>就可以引入napi
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"],
        },
    ]
}
