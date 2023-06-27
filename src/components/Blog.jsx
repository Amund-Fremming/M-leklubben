import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { styles } from "./styles";
import Footer from "./Footer";
import Blogbox from "./Blogbox";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContextProvider } from "./AuthContext";

document.body.style.backgroundColor = "#1D1E20";
let globalInit = false;

const Blog = () => {

    const [blogposts, setBlogposts] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setBlogposts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getPosts();
    }, []);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        window.location.reload(false);
    }

    return(
        <>
            <AuthContextProvider>
                <Navbar bg={"[#E09A32]"} />
            </AuthContextProvider>
            <div className="bg-[#1D1E20] pt-32 flex pb-64">

                {/* Sidebar */}
                <div className="mt-12 hidden md:flex md:flex-col l-0 bg-[#1D1E20] min-h-[100%] w-[20vw]">
                    <div className="absolute min-h-[100%] w-[3px] bg-[#2E2E33] ml-[20vw]" />
                    <h2 className={`${styles.heroSubTextWhite} pt-10 ml-[4vw]`}>{/* Content */}</h2>
                    <ul className="list-disc ml-[9vw] text-semi-white font-medium cursor-pointer">
                        {/* Her hopper du direkte til #id med <a>, må da lagres id på alle elementer under som itereres fra db */}
                        {/*<li>dag1</li>
                        <li>dag2</li>
    <li>dag3</li>*/}
                    </ul>
                </div>

                {/* Hovedseksjon */}
                <div className="bg-[#1D1E20] ml-[3px] flex flex-col pl-[10vw] w-full min-h-[100%]">
                    <h1 className={`${styles.heroHeadTextWhite}`}>Aktivitet</h1>
                    <h3 className={`${styles.sectionSubTextWhite}`}>Hva vi har gjort den siste tiden</h3>

                    {/**
                     * 
                     * Når du looper over antall innlegg fra databasen, legg in delay på de 3 /fire første innleggene så de laster pent etter hverandre, resten kan ha delay 0.2
                     * 
                     */}
                    {
                        blogposts.map(post => (
                            <AuthContextProvider>
                                <Blogbox overskrift={post.header} dato={post.dato} tekst={post.blogpost} bio={post.intro} deletePost={deletePost} id={post.id} bilde={post.url} />
                            </AuthContextProvider>
                        ))
                    }
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Blog;