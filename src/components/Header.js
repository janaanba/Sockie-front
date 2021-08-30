import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Header(props) {
    return (
        <div >
            <IconButton style={{float:'right'}} onClick={props.menu?props.addFunc:props.deleteFunc}>
               {props.menu? <AddIcon />:<DeleteIcon />}
                </IconButton>  
        </div>
    );
}