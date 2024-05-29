import { useEffect, useState } from "react"

export const useProps = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    //scrollが100を超えたか判定
    const handleShow = () => {
      setShow(window.scrollY > 100);
    };

    //イベントリスナーの設定
    window.addEventListener('scroll', handleShow);

    //クリーンナップ関数
    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  }, []);

  return {
    show,
  };
};