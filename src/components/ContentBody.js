export default function ContentBody(props){
    return (
        <div dangerouslySetInnerHTML={{__html:props.value}} onKeyUp={(val,value)=>{props.onChangeFunc(val,value)}} style={{height:258,outline: '0px solid transparent', padding:5}} contentEditable={true} />
    )
}