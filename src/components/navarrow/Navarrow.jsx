import './navarrow.scss';
import { ArrowDownward } from '@material-ui/icons';

export default function Navarrow(props) {
  return (
    <a className="arrowDownward" href={props.next} >
      <ArrowDownward className='iconArrowDownward'/>
    </a>
  );
}
