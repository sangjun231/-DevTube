import useModalStore from '../zustand/modalStore';

const ConfirmModal = ({ modalTask }) => {
  const { confirmToggle } = useModalStore((state) => state);

  /* const selection = async () => {


    if (targetId === '') return;
    if (targetId === 'no') return;
  };

  const toggleFor = async (e) => {
    const promise = new Promise((resolve, reject) => {});
  }; */

  /* 예 누를 시 진행, 아니오 누를 시 취소 */

  return (
    <>
      <div className="fixed flex h-screen w-full items-center justify-center bg-gray-900/30">
        <div className="flex w-96 flex-col items-center justify-center gap-7 bg-bgDev p-5">
          <h1 className="w-full text-left text-xl font-bold">알림</h1>
          <p className="w-full text-sm">{modalTask}</p>
          <div className="flex w-full justify-end gap-3 text-sm">
            <button id="yes" onClick={(e) => toggleFor(e)} className="w-1/4 bg-yellow-300 p-2 hover:bg-yellow-400">
              예
            </button>
            <button
              id="no"
              onClick={(e) => toggleFor(e)}
              className="w-1/4 border border-yellow-300 p-2 hover:bg-slate-50"
            >
              아니오
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;