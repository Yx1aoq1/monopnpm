import React, { useState } from 'react';
import { Button, Input, Card } from '@monopnpm/ui';
import { capitalizeFirst, formatCurrency, chunkArray } from '@monopnpm/util';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 使用util包的方法
  const capitalizedValue = capitalizeFirst(inputValue);
  const priceExample = formatCurrency(1299);
  const arrayExample = chunkArray([1, 2, 3, 4, 5, 6], 2);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Monopnpm Web 应用示例</h1>

      <Card title="UI 组件展示" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '16px' }}>
          <Input
            label="输入一些文字试试："
            value={inputValue}
            onChange={handleInputChange}
            placeholder="输入内容..."
          />
        </div>

        <Button type="primary" onClick={() => alert(`你输入了: ${inputValue}`)}>
          点击按钮
        </Button>
      </Card>

      <Card title="工具方法演示" style={{ marginBottom: '20px' }}>
        <p>
          <strong>原始输入:</strong> {inputValue}
        </p>
        <p>
          <strong>首字母大写:</strong> {capitalizedValue}
        </p>
        <p>
          <strong>价格格式化:</strong> {priceExample}
        </p>
        <p>
          <strong>数组分块:</strong> {JSON.stringify(arrayExample)}
        </p>
      </Card>

      <Card title="项目说明">
        <p>这是一个 monorepo 项目示例，包含以下包：</p>
        <ul>
          <li>
            <strong>@monopnpm/web:</strong> 基于 React + Vite 的 Web 应用
          </li>
          <li>
            <strong>@monopnpm/ui:</strong> 基于 React + Ant Design 的 UI 组件库
          </li>
          <li>
            <strong>@monopnpm/util:</strong> 基于 Lodash 的工具方法库
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default App;
