import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';

function Home(props)
{

  return (
    <div className='container'>
      <br />
      <br />
      <br />
      <div className='row text-center heading'>
      This quiz consists of 5 multiple-choice questions.<br/>
      Timing - You will need to complete your attempt in one sitting
       as you are allotted 150 seconds to complete the quiz.<br/><br/>
       To start, click the "Start The Quiz" button. When finished, click the "Submit" button.
       When time is up the quiz will be automatically submitted
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='row text-center'>
        <div className='col-12'>
          <Link to='/quiz'>
            <Button color='info'>Start The Quiz</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;