import { LeftMenuBarBottomTabs, LeftMenuBarTabs } from "../../constants/leftMenuBarTabs";
import { useLeftMenuBarStore } from "../../state";

const LeftMenuBar = () => {
  const activeLeftMenuBarTab = useLeftMenuBarStore((state: any) => state.activeLeftMenuBarTab);
  const setActiveLeftMenuBarTab = useLeftMenuBarStore((state: any) => state.setActiveLeftMenuBarTab);

  const handleTabClick = (tabId: number) => {
    setActiveLeftMenuBarTab(tabId);
  };

  return (
    <div className='w-14 h-full bg-background-dark border-r border-border flex flex-col justify-between items-center'>
      <ul className='w-full flex flex-col items-center'>
        {
          LeftMenuBarTabs.map((menu) => (
            <li
              key={menu.id}
              className={`w-full h-16 flex items-center justify-center cursor-pointer border-l-[3px] ${activeLeftMenuBarTab === menu.id ? 'border-primary' : 'border-transparent'}`}
              onClick={() => handleTabClick(menu.id)}
            >
              <img src={`/src/assets/icons/${menu.icon}`} alt="" className='w-9 h-9 object-contain' />
            </li>
          ))
        }
      </ul>
      <ul className='w-full flex flex-col items-center'>
        {
          LeftMenuBarBottomTabs.map((menu) => (
            <li
              key={menu.id}
              className='w-full h-16 flex items-center justify-center cursor-pointer'
            >
              <img src={`/src/assets/icons/${menu.icon}`} alt="" className='w-9 h-9 object-contain' />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default LeftMenuBar;