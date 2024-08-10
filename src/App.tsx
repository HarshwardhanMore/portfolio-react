import { ConfigProvider } from "antd";
import "./App.css";
import Window from "./components/Window/Window";

function App() {
  return <ConfigProvider
    theme={{
      components: {
        Tabs: {
          borderRadiusLG: 0,
          cardBg: 'transparent',
          lineWidth: 0,
          // colorBorderBg: 'red',
          itemSelectedColor: '#F3F3F3',
          colorBgContainer: 'transparent',
          
        },  
      }
    }}
  >
    <Window />
  </ConfigProvider>
}

export default App;
