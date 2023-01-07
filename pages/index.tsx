import Profile from "../components/Profile"
import WorkList from "../components/WorkList"
export default function Home(): JSX.Element {
  return (
    <div className="container">
      <div className="row m-0 py-4 g-2">
        <div className="col-md-4 p-0">
          <Profile />
        </div>
        <div className="col-md-8 p-0">
          <WorkList />
        </div>
      </div>
    </div>
  )
}
