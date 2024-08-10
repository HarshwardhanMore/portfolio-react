import { TopMenuBarTabs } from "../../constants";

const TopMenuBar = () => {
  return (
    <div className="w-full h-10 bg-background-dark border-b border-border flex items-center">
      <div className=" w-[30%] h-full py-2 px-3 flex items-center gap-x-4">
        <div className="h-full">
          <img src="/src/assets/icons/vscode.svg" alt="" className="h-full" />
        </div>
        <ul className="flex flex-1 gap-x-1 font-normal text-sm *:px-1.5 *:py-0.5 *:rounded *:cursor-pointer">
          {
            TopMenuBarTabs.map(menu => (
              <li id={menu.id.toString()} className="hover:bg-background-lite">{ menu.name }</li>
            ))
          }
        </ul>
      </div>
      <div className=" w-[40%] h-2/3 rounded-md border border-border bg-background-lite text-sm flex items-center justify-center">
        Harshwardhan's Portfolio
      </div>
      <div className=" w-[30%] h-full"></div>
    </div>
  );
};

export default TopMenuBar;
