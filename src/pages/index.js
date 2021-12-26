import React, { useEffect } from "react";
import { connect } from "react-redux";
import { wrapper } from "../store/store";
import { bindActionCreators } from "redux";
import { serverFetchImages,dispatchToReducer } from './../store/ipsumImages/actions';
import { useDispatch } from "react-redux";
import ImageComponent from "../components/imageComponent";
import { useSelector } from "react-redux";
import axios from 'axios'

 const index = (props) => {

   
  const dispatch = useDispatch();
  const posts = useSelector(state => state.ipsumImages.posts)
  console.log("from index ",props.data);
  useEffect(() => {
    if(!props.data) return;
    dispatch(dispatchToReducer(props.data));
    return () => {
    }
  }, [props])
  if(!posts) return <></>;
  return (
    <div id="container" style={{textAlign:"center",marginTop:"100px"}}>
      <h1>Demo NextJs</h1>
      <div className="wrap" style={{
      margin:"100px",
      display:"flex",
      alignItems: "center",
      flexWrap:"wrap",
      gap:"25px",
      justifyContent:"center", 
      }}>
      {posts && posts.map(post => {
        return <ImageComponent key={post.id} post={post} />
      })}
      </div>
    </div>
  );
};

const randomId = (min,max) => {
  return Math.round(Math.random()*(max - min));
}

export async function getStaticProps(context) {
  console.log("getStaticProps Run!");
  const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=${randomId(10,20)}`)
  const data = await res.json()
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 10,
  }
}

// export const getStaticProps = wrapper.getStaticProps((store) => () => {
//   console.log("getStaticProps Run!");
//   // const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=${randomId(10,20)}`)
//   // const data = await res.json();
//     store.dispatch(serverFetchImages());

    
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // serverFetchImages: bindActionCreators(serverFetchImages, dispatch),
//     serverFetchImages: bindActionCreators(
//       (data) => serverFetchImages(data),
//       dispatch
//     ),
//   };
// };

// export default connect(null, mapDispatchToProps)(index);
export default index;
