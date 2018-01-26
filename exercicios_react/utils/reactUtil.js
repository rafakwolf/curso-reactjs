import React from "react";

function childrenWithProps(children, props){
    return React.Children.map(props.children, child => React.cloneElement(child, {...props}))
}

function clone(objeto){
    return {...objeto}
}

export {childrenWithProps, clone}