const _0x19d78b = _0x5799;
(function (_0x3af6f8, _0x2ad2e1) {
  const _0x2b3c05 = _0x5799,
    _0x3c6cec = _0x3af6f8();
  while (!![]) {
    try {
      const _0x14935b =
        parseInt(_0x2b3c05(0x21e)) / 0x1 +
        (-parseInt(_0x2b3c05(0x1fa)) / 0x2) *
          (-parseInt(_0x2b3c05(0x20f)) / 0x3) +
        (-parseInt(_0x2b3c05(0x20a)) / 0x4) *
          (parseInt(_0x2b3c05(0x221)) / 0x5) +
        parseInt(_0x2b3c05(0x214)) / 0x6 +
        (parseInt(_0x2b3c05(0x1ed)) / 0x7) *
          (parseInt(_0x2b3c05(0x211)) / 0x8) +
        (-parseInt(_0x2b3c05(0x20c)) / 0x9) *
          (-parseInt(_0x2b3c05(0x216)) / 0xa) +
        -parseInt(_0x2b3c05(0x217)) / 0xb;
      if (_0x14935b === _0x2ad2e1) break;
      else _0x3c6cec["push"](_0x3c6cec["shift"]());
    } catch (_0x215783) {
      _0x3c6cec["push"](_0x3c6cec["shift"]());
    }
  }
})(_0x481e, 0x87271);
const firebaseConfig = {
  apiKey: _0x19d78b(0x218),
  authDomain: "zaky-50e47.firebaseapp.com",
  databaseURL: _0x19d78b(0x204),
  projectId: _0x19d78b(0x20b),
  storageBucket: _0x19d78b(0x1fc),
  messagingSenderId: _0x19d78b(0x1fb),
  appId: _0x19d78b(0x213),
  measurementId: _0x19d78b(0x1f3),
};
firebase[_0x19d78b(0x1ee)](firebaseConfig);
function _0x5799(_0x27e8f8, _0x396fb6) {
  const _0x481e16 = _0x481e();
  return (
    (_0x5799 = function (_0x579962, _0x433aac) {
      _0x579962 = _0x579962 - 0x1ed;
      let _0x21bc91 = _0x481e16[_0x579962];
      return _0x21bc91;
    }),
    _0x5799(_0x27e8f8, _0x396fb6)
  );
}
function _0x481e() {
  const _0x705be9 = [
    "forEach",
    "category",
    "appendChild",
    "cells",
    "fileName",
    "2DxNFxY",
    "1038515986869",
    "zaky-50e47.appspot.com",
    "collection",
    "get",
    "insertCell",
    "className",
    "style",
    "button",
    "_blank",
    "https://zaky-50e47-default-rtdb.firebaseio.com",
    "getElementById",
    "toLowerCase",
    "catch",
    "log",
    "innerText",
    "18296UUbFFN",
    "zaky-50e47",
    "27jAeNPX",
    "then",
    "querySelectorAll",
    "1373259qNmycq",
    "table-row",
    "544hwWRvb",
    "value",
    "1:1038515986869:web:7fa6249a5ff22acb96b9fc",
    "1362594VmQxmZ",
    "child",
    "1678780xWGkiD",
    "20858915ABlgTo",
    "AIzaSyBaEE0Gx3iMoLWDAUTSLCoLLWiIJUljWvk",
    "data",
    "ref",
    "Download",
    "innerHTML",
    "open",
    "839912dyKueC",
    "display",
    "includes",
    "570cOrfNv",
    "97062pMpRba",
    "initializeApp",
    "addEventListener",
    "textContent",
    "files",
    "input",
    "G-JD159TTZNG",
    "getDownloadURL",
  ];
  _0x481e = function () {
    return _0x705be9;
  };
  return _0x481e();
}
const storageRef = firebase["storage"]()[_0x19d78b(0x21a)]();
function getFileList() {
  const _0x4db061 = _0x19d78b,
    _0x35bc52 = document[_0x4db061(0x205)]("file-list");
  (_0x35bc52[_0x4db061(0x21c)] = ""),
    firebase["firestore"]()
      [_0x4db061(0x1fd)](_0x4db061(0x1f1))
      [_0x4db061(0x1fe)]()
      [_0x4db061(0x20d)]((_0x233e10) => {
        _0x233e10["forEach"]((_0x47a61a) => {
          const _0xa7c6ff = _0x5799,
            _0xecc94 = _0x47a61a[_0xa7c6ff(0x219)](),
            _0x1425ee = _0xecc94[_0xa7c6ff(0x1f9)],
            _0x2961b5 = _0xecc94[_0xa7c6ff(0x1f6)],
            _0x1bb75a = document["createElement"](_0xa7c6ff(0x202));
          (_0x1bb75a[_0xa7c6ff(0x209)] = _0xa7c6ff(0x21b)),
            (_0x1bb75a[_0xa7c6ff(0x200)] = "btn\x20btn-success"),
            _0x1bb75a[_0xa7c6ff(0x1ef)]("click", () => {
              const _0x44df38 = _0xa7c6ff;
              storageRef[_0x44df38(0x215)](_0x1425ee)
                [_0x44df38(0x1f4)]()
                [_0x44df38(0x20d)]((_0x14ac33) => {
                  const _0x280014 = _0x44df38;
                  window[_0x280014(0x21d)](_0x14ac33, _0x280014(0x203));
                })
                [_0x44df38(0x207)]((_0x2b69d6) => {
                  const _0x147368 = _0x44df38;
                  console[_0x147368(0x208)](_0x2b69d6);
                });
            });
          const _0x2811c6 = _0x35bc52["insertRow"](),
            _0x3a49a4 = _0x2811c6["insertCell"](),
            _0x39fa1d = _0x2811c6[_0xa7c6ff(0x1ff)](),
            _0x5acc2d = _0x2811c6[_0xa7c6ff(0x1ff)]();
          (_0x3a49a4[_0xa7c6ff(0x1f0)] = _0x1425ee),
            (_0x39fa1d[_0xa7c6ff(0x1f0)] = _0x2961b5),
            _0x5acc2d[_0xa7c6ff(0x1f7)](_0x1bb75a);
        });
      })
      [_0x4db061(0x207)]((_0x5d2700) => {
        const _0x37c8ed = _0x4db061;
        console[_0x37c8ed(0x208)](_0x5d2700);
      });
}
const searchInput = document[_0x19d78b(0x205)]("search-input");
searchInput["addEventListener"](_0x19d78b(0x1f2), () => {
  const _0x34955d = _0x19d78b,
    _0x53f00d = searchInput[_0x34955d(0x212)][_0x34955d(0x206)](),
    _0x1333a6 = document[_0x34955d(0x20e)]("#file-list\x20tr");
  _0x1333a6[_0x34955d(0x1f5)]((_0x3cfc4f) => {
    const _0x3690a5 = _0x34955d,
      _0x46f602 = _0x3cfc4f["cells"][0x0][_0x3690a5(0x1f0)]["toLowerCase"](),
      _0x38c307 =
        _0x3cfc4f[_0x3690a5(0x1f8)][0x1][_0x3690a5(0x1f0)][_0x3690a5(0x206)]();
    _0x46f602[_0x3690a5(0x220)](_0x53f00d) || _0x38c307["includes"](_0x53f00d)
      ? (_0x3cfc4f["style"][_0x3690a5(0x21f)] = _0x3690a5(0x210))
      : (_0x3cfc4f[_0x3690a5(0x201)][_0x3690a5(0x21f)] = "none");
  });
}),
  getFileList();
