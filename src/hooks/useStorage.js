import { useState, useEffect } from "react";

import { fireStorage, fireStore, timeStamp } from "../firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = fireStorage.ref(file.name);
    const collectionRef = fireStore.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        collectionRef.add({
          url,
          createdAt: timeStamp(),
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
