import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { styles } from "./styles";
import Footer from "./Footer";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { AuthContextProvider } from './AuthContext';

let globalInit = false;

const Aktivitet = () => {

    const [imageList, setImageList] = useState([]);
    const [imageUpload, setImageUpload] = useState(null);

    const imageListRef = ref(storage, "images/");

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            // her kan man legge til i imagelist, men får duplikater
            setImageList((prev) => [...prev, url]);
          });
        });
    };

    useEffect(() => {
        if(globalInit) return;
        globalInit = true;
        listAll(imageListRef).then((response) => {
            setImageList([]);
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
      }, []);

    return(
        <div className="bg-[#1D1E20]">
        <AuthContextProvider>
            <Navbar bg={"[#E09A32]"} />
        </AuthContextProvider>
            <div className="mt-20" />

            <input type="file" onChange={e => {
                setImageUpload(e.target.files[0])
            }
            } />
            <input value="submit" className="bg-gray-500 h-10 w-32" type="button" onClick={uploadImage} />

            <input value="submit" className="bg-gray-700 h-10 w-32" type="button" onClick={() => {
                imageList.forEach(im => console.log(im));
            }} />
            <div className="mt-96" />
            {
                imageList.map(url => {
                    return(
                        <img key={url} className="w-[30%] m-10" src={url} />
                    );
                })
            }
            <Footer bg={"bg-white"} />
        </div>
    );
}

export default Aktivitet;