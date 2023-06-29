import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { styles } from "../util/styles";
import Footer from "./Footer";
import Blogbox from "./Blogbox";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContextProvider } from "../util/AuthContext";
import { Audio } from 'react-loader-spinner';

const Blog = () => {

    const [blogposts, setBlogposts] = useState([]);
    const [loading, setLoading] = useState(true);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            const fetchedPosts = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            const sortedPosts = fetchedPosts.sort((a, b) => (new Date(b.dato) - new Date(a.dato)));

            setBlogposts(sortedPosts);
            setLoading(false);
        }

        getPosts();
    }, []);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        window.location.reload(false);
    }

    if(loading) {
        return(
            <div className="flex justify-center items-center h-screen w-full">
            <Audio
                height="80"
                width="80"
                radius="9"
                color="gray"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>
        )
    }

    return(
        <>
            <AuthContextProvider>
                <Navbar bg={"[#E09A32]"} />
            </AuthContextProvider>
            <div className="bg-[#E2DFD2] pt-32 flex pb-64">

                {/* Hovedseksjon */}
                <div className="bg-[#E2DFD2] flex flex-col justify-center items-center px-[3vw] w-full min-h-[100%]">
                    <h1 className={`${styles.heroHeadText} pr-[45%]`}>Aktivitet</h1>
                    <h3 className={`${styles.sectionSubText} pr-[45%]`}>Hva vi har gjort den siste tiden</h3>
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