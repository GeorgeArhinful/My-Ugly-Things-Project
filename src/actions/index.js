export function addPost(title ,description,url){
  return {
    type:"ADD_POST",
    title,
    description,
    url
  }
}

export function removePost(index){
  return{
    type:"REMOVE_POST",
    index
  }
}
