import './feeds.css'

//component
import feed from './feed'

//fake data
import HomeFeedData from '../../FakeData/HomeFeedData'

export default function Feeds() {
  return (
    <div className='feeds'>
        {
            HomeFeedData.map(fed=>(
                <feed fed={fed} key={fed.key} />
            ))
        }
    </div>
  )
}
