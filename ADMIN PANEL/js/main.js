const _0x36d639 = _0x53af;
(function (_0x446315, _0x53dba1) {
  const _0x2a3adb = _0x53af,
    _0x284cef = _0x446315();
  while (!![]) {
    try {
      const _0x404710 =
        (-parseInt(_0x2a3adb(0x107)) / 0x1) *
          (-parseInt(_0x2a3adb(0x104)) / 0x2) +
        (-parseInt(_0x2a3adb(0xf0)) / 0x3) * (parseInt(_0x2a3adb(0xd3)) / 0x4) +
        parseInt(_0x2a3adb(0xcd)) / 0x5 +
        -parseInt(_0x2a3adb(0xd8)) / 0x6 +
        (parseInt(_0x2a3adb(0xde)) / 0x7) * (-parseInt(_0x2a3adb(0xcc)) / 0x8) +
        -parseInt(_0x2a3adb(0x100)) / 0x9 +
        (parseInt(_0x2a3adb(0xd7)) / 0xa) * (parseInt(_0x2a3adb(0xca)) / 0xb);
      if (_0x404710 === _0x53dba1) break;
      else _0x284cef["push"](_0x284cef["shift"]());
    } catch (_0x1b9dbb) {
      _0x284cef["push"](_0x284cef["shift"]());
    }
  }
})(_0xe504, 0x25bc1);
const firebaseConfig = {
  apiKey: _0x36d639(0xe5),
  authDomain: _0x36d639(0xf3),
  databaseURL: _0x36d639(0x106),
  projectId: _0x36d639(0x102),
  storageBucket: "zaky-50e47.appspot.com",
  messagingSenderId: "1038515986869",
  appId: _0x36d639(0xd4),
  measurementId: "G-JD159TTZNG",
};
firebase["initializeApp"](firebaseConfig);
function _0x53af(_0x46eee7, _0x17c0fe) {
  const _0xe504fd = _0xe504();
  return (
    (_0x53af = function (_0x53af4e, _0x1111bf) {
      _0x53af4e = _0x53af4e - 0xc8;
      let _0xefa0f6 = _0xe504fd[_0x53af4e];
      return _0xefa0f6;
    }),
    _0x53af(_0x46eee7, _0x17c0fe)
  );
}
const storageRef = firebase[_0x36d639(0xe8)]()[_0x36d639(0xf6)]();
function getFileList() {
  const _0x419fa6 = _0x36d639,
    _0x17538f = document["getElementById"]("file-list");
  (_0x17538f[_0x419fa6(0xe2)] = ""),
    firebase[_0x419fa6(0xfb)]()
      [_0x419fa6(0xf2)](_0x419fa6(0xfe))
      ["get"]()
      [_0x419fa6(0xea)]((_0x402ffc) => {
        _0x402ffc["forEach"]((_0x305c55) => {
          const _0x479549 = _0x53af,
            _0x5bcb5d = _0x305c55[_0x479549(0xe3)](),
            _0x29c0b3 = _0x305c55["id"],
            _0x27c82d = _0x5bcb5d["fileName"],
            _0x5c5dd1 = _0x5bcb5d[_0x479549(0xef)],
            _0x10357d = document[_0x479549(0xed)](_0x479549(0x108));
          (_0x10357d["innerText"] = _0x479549(0xfc)),
            (_0x10357d[_0x479549(0xe1)] = _0x479549(0xe4)),
            _0x10357d[_0x479549(0x103)](_0x479549(0xe7), () => {
              const _0x1cdcd2 = _0x479549;
              storageRef["child"](_0x27c82d)
                [_0x1cdcd2(0xeb)]()
                [_0x1cdcd2(0xea)]((_0x1bede7) => {
                  const _0xce9ad4 = _0x1cdcd2;
                  window[_0xce9ad4(0xf5)](_0x1bede7, _0xce9ad4(0xf7));
                })
                [_0x1cdcd2(0xc9)]((_0xc915ab) => {
                  const _0x45c5a1 = _0x1cdcd2;
                  console[_0x45c5a1(0xdc)](_0xc915ab);
                });
            });
          const _0x45ccb0 = document["createElement"](_0x479549(0x108));
          (_0x45ccb0[_0x479549(0x101)] = "Delete"),
            (_0x45ccb0[_0x479549(0xe1)] = _0x479549(0xd9)),
            _0x45ccb0["addEventListener"](_0x479549(0xe7), () => {
              const _0x51bb7f = _0x479549;
              storageRef[_0x51bb7f(0xc8)](_0x27c82d)
                ["delete"]()
                ["then"](() => {
                  const _0x4c6864 = _0x51bb7f;
                  firebase[_0x4c6864(0xfb)]()
                    [_0x4c6864(0xf2)](_0x4c6864(0xfe))
                    [_0x4c6864(0xec)](_0x29c0b3)
                    [_0x4c6864(0xfa)](),
                    getFileList();
                })
                [_0x51bb7f(0xc9)]((_0x238a5b) => {
                  console["log"](_0x238a5b);
                });
            });
          const _0x3d0e83 = _0x17538f[_0x479549(0xcf)](),
            _0x433762 = _0x3d0e83[_0x479549(0xfd)](),
            _0x5a3120 = _0x3d0e83[_0x479549(0xfd)](),
            _0x4c03e3 = _0x3d0e83[_0x479549(0xfd)](),
            _0x4ab682 = _0x3d0e83[_0x479549(0xfd)]();
          (_0x433762[_0x479549(0xcb)] = _0x27c82d),
            (_0x5a3120[_0x479549(0xcb)] = _0x5c5dd1),
            _0x4c03e3["appendChild"](_0x10357d),
            _0x4ab682[_0x479549(0xff)](_0x45ccb0);
        });
      })
      [_0x419fa6(0xc9)]((_0xf96e84) => {
        const _0x278546 = _0x419fa6;
        console[_0x278546(0xdc)](_0xf96e84);
      });
}
const searchInput = document[_0x36d639(0xee)](_0x36d639(0xd1));
function _0xe504() {
  const _0x1af3cb = [
    "then",
    "getDownloadURL",
    "doc",
    "createElement",
    "getElementById",
    "category",
    "611337ODTPly",
    "value",
    "collection",
    "zaky-50e47.firebaseapp.com",
    "preventDefault",
    "open",
    "ref",
    "_blank",
    "file-input",
    "table-row",
    "delete",
    "firestore",
    "Download",
    "insertCell",
    "files",
    "appendChild",
    "2098701vNpXCn",
    "innerText",
    "zaky-50e47",
    "addEventListener",
    "32CyVQzG",
    "change",
    "https://zaky-50e47-default-rtdb.firebaseio.com",
    "2503xnndTG",
    "button",
    "child",
    "catch",
    "11PznDPR",
    "textContent",
    "17128tEQdqD",
    "1401250zvqwCV",
    "Choose\x20file",
    "insertRow",
    "toLowerCase",
    "search-input",
    "#file-list\x20tr",
    "4xWRshP",
    "1:1038515986869:web:7fa6249a5ff22acb96b9fc",
    "style",
    "add",
    "5449300dzHMeR",
    "1603656jwSGEf",
    "btn\x20btn-danger",
    "display",
    "forEach",
    "log",
    "cells",
    "21LMnrnf",
    "none",
    "put",
    "className",
    "innerHTML",
    "data",
    "btn\x20btn-success",
    "AIzaSyBaEE0Gx3iMoLWDAUTSLCoLLWiIJUljWvk",
    "name",
    "click",
    "storage",
    "includes",
  ];
  _0xe504 = function () {
    return _0x1af3cb;
  };
  return _0xe504();
}
searchInput[_0x36d639(0x103)]("input", () => {
  const _0x189e44 = _0x36d639,
    _0x1c1bc8 = searchInput[_0x189e44(0xf1)][_0x189e44(0xd0)](),
    _0x3db6f9 = document["querySelectorAll"](_0x189e44(0xd2));
  _0x3db6f9[_0x189e44(0xdb)]((_0x52e172) => {
    const _0x33002a = _0x189e44,
      _0x4a1c10 =
        _0x52e172[_0x33002a(0xdd)][0x0]["textContent"]["toLowerCase"](),
      _0x14697d = _0x52e172["cells"][0x1][_0x33002a(0xcb)]["toLowerCase"]();
    _0x4a1c10[_0x33002a(0xe9)](_0x1c1bc8) ||
    _0x14697d[_0x33002a(0xe9)](_0x1c1bc8)
      ? (_0x52e172[_0x33002a(0xd5)]["display"] = _0x33002a(0xf9))
      : (_0x52e172[_0x33002a(0xd5)][_0x33002a(0xda)] = _0x33002a(0xdf));
  });
});
const uploadForm = document[_0x36d639(0xee)]("upload-form"),
  fileInput = document[_0x36d639(0xee)](_0x36d639(0xf8)),
  categoryInput = document[_0x36d639(0xee)]("category-input"),
  fileInputLabel = document["querySelector"](".custom-file-label");
fileInput["addEventListener"](_0x36d639(0x105), () => {
  const _0x363f3a = _0x36d639;
  fileInputLabel["textContent"] =
    fileInput[_0x363f3a(0xfe)][0x0][_0x363f3a(0xe6)];
}),
  uploadForm[_0x36d639(0x103)]("submit", (_0xc93319) => {
    const _0x4708fe = _0x36d639;
    _0xc93319[_0x4708fe(0xf4)]();
    const _0x3ca751 = fileInput["files"][0x0],
      _0x35fb5e = _0x3ca751["name"],
      _0x265a7e = categoryInput["value"],
      _0xeb17c8 = storageRef[_0x4708fe(0xc8)](_0x35fb5e);
    _0xeb17c8[_0x4708fe(0xe0)](_0x3ca751)
      [_0x4708fe(0xea)](() => {
        const _0x1b67c9 = _0x4708fe;
        return firebase["firestore"]()
          [_0x1b67c9(0xf2)](_0x1b67c9(0xfe))
          [_0x1b67c9(0xd6)]({ fileName: _0x35fb5e, category: _0x265a7e });
      })
      [_0x4708fe(0xea)](() => {
        const _0x2bca4e = _0x4708fe;
        getFileList(),
          (fileInput["value"] = ""),
          (fileInputLabel[_0x2bca4e(0xcb)] = _0x2bca4e(0xce)),
          (categoryInput["value"] = "");
      })
      [_0x4708fe(0xc9)]((_0x570fa2) => {
        console["log"](_0x570fa2);
      });
  }),
  getFileList();
