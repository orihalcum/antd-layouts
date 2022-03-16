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

  const [selectedLayout, setSelectedLayout] = useState(LAYOUTS[0])

  return (
    <div>
      <div style={layoutStyle}>
        <ul style={ulStyle}>
          {LAYOUTS.map(({ label }, k) => (
            <li
              key={k}
              onClick={() => setSelectedLayout(LAYOUTS[k])}
              style={{ cursor: 'pointer', color: selectedLayout.label === label ? '#0d76ff' : '#000' }}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {selectedLayout.component}
      </div>
    </div>
  );
}

export default App;

const layoutStyle = {
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f1f1f1',
  width: '100%',
  overflow: 'scroll',
  padding: '0 30px'
}

const ulStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: 30,
  fontSize: 12
}