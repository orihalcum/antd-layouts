import { useState } from 'react';
import './App.css';
import LayoutCustomTrigger from './layout/layout-custom-trigger';
import LayoutFixedHeader from './layout/layout-fixed-header';
import LayoutFixedSider from './layout/layout-fixed-sider';
import LayoutHeaderContentFooter from './layout/layout-header-content-footer';
import LayoutHeaderSider from './layout/layout-header-sider';
import LayoutHeaderSider2 from './layout/layout-header-sider-2';
import LayoutResponsive from './layout/layout-responsive';
import LayoutSider from './layout/layout-sider';

const LAYOUTS = [
  { label: 'Header Content Footer', component: <LayoutHeaderContentFooter /> },
  { label: 'Header Sider', component: <LayoutHeaderSider /> },
  { label: 'Header Sider 2', component: <LayoutHeaderSider2 /> },
  { label: 'Responsive', component: <LayoutResponsive /> },
  { label: 'Sider', component: <LayoutSider /> },
  { label: 'Custom Trigger', component: <LayoutCustomTrigger /> },
  { label: 'Fixed Header', component: <LayoutFixedHeader /> },
  { label: 'Fixed Sider', component: <LayoutFixedSider /> },
]

function App() {

  const [selectedLayout, setSelectedLayout] = useState(<LayoutResponsive />)

  return (
    <div>
      <div style={{ height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f1f1', width: '100%', overflow: 'scroll', padding: '0 30px' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: 30, fontSize: 12 }}>
          {LAYOUTS.map(({ label, component }, k) => <li onClick={() => setSelectedLayout(component)} key={k} style={{ cursor: 'pointer' }}>{label}</li>)}
        </ul>
      </div>
      <div>
        {selectedLayout}
      </div>
    </div>
  );
}

export default App;
