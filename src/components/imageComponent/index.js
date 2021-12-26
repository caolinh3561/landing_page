import React from 'react'
// import { useSelector } from 'react-redux';
import Image from 'next/image'

export default function ImageComponent({post}) {
    // console.log(post);
    if(!post) return <></>;
    return (
        <div style={{height:300,width:300, marginTop:40}}>
            <h2 style={{margin:0,marginBottom:10}}>{post.author}</h2>
            <Image width="300" height="300" 
            src={post.download_url} alt={post.author} />
        </div>
    )
}
