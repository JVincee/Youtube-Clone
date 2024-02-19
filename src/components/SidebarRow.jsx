import './SidebarRow.css';
function SidebarRow(props) {
  return(
    <div className="sidebar_row">
      <props.icon className='sidebar_icon'/>
      <h2 className='sidebar_title'>{props.title}</h2>
    </div>
  )
}
export default SidebarRow