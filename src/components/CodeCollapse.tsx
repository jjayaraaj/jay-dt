'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Copy, Check, Code, FileText, Terminal, Settings } from 'lucide-react';

interface CodeCollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  language?: string;
  filename?: string;
  type?: 'code' | 'config' | 'command' | 'output';
  className?: string;
}

const typeConfig = {
  code: {
    icon: Code,
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    headerBg: 'bg-gray-100',
    iconColor: 'text-gray-600'
  },
  config: {
    icon: Settings,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    headerBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  command: {
    icon: Terminal,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    headerBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  output: {
    icon: FileText,
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    headerBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
};

export function CodeCollapse({ 
  title, 
  children, 
  defaultOpen = false,
  language,
  filename,
  type = 'code',
  className = ''
}: CodeCollapseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);
  const config = typeConfig[type];
  const Icon = config.icon;

  const handleCopy = async () => {
    try {
      // Extract text content from children
      const textContent = extractTextFromChildren(children);
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const extractTextFromChildren = (children: React.ReactNode): string => {
    if (typeof children === 'string') return children;
    if (typeof children === 'number') return children.toString();
    if (React.isValidElement(children)) {
      if (children.type === 'pre' && children.props.children) {
        return extractTextFromChildren(children.props.children);
      }
      if (children.type === 'code' && children.props.children) {
        return extractTextFromChildren(children.props.children);
      }
      if (children.props && children.props.children) {
        return extractTextFromChildren(children.props.children);
      }
    }
    if (Array.isArray(children)) {
      return children.map(child => extractTextFromChildren(child)).join('');
    }
    return '';
  };

  return (
    <div className={`
      ${config.borderColor} 
      border 
      rounded-lg 
      my-4 
      overflow-hidden
      shadow-sm
      ${className}
    `}>
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${config.headerBg}
          flex 
          items-center 
          justify-between 
          w-full 
          p-4 
          text-left 
          hover:opacity-90 
          transition-all 
          duration-200
        `}
      >
        <div className="flex items-center space-x-3">
          <Icon className={`${config.iconColor} h-4 w-4`} />
          <div>
            <span className="font-medium text-gray-900">{title}</span>
            {filename && (
              <span className="text-sm text-gray-500 ml-2">• {filename}</span>
            )}
            {language && (
              <span className="text-xs text-gray-400 ml-2 uppercase font-mono">
                {language}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Copy button - only show when expanded */}
          {isOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              className="p-1.5 rounded hover:bg-white/50 transition-colors"
              title="Copy code"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4 text-gray-500" />
              )}
            </button>
          )}
          
          {/* Expand/collapse icon */}
          <div className="transform transition-transform duration-200" 
               style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </button>

      {/* Content */}
      <div 
        className={`
          transition-all 
          duration-300 
          ease-in-out 
          overflow-hidden
          ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className={`${config.bgColor} border-t ${config.borderColor}`}>
          <div className="relative">
            {/* Content wrapper */}
            <div className="overflow-x-auto">
              {children}
            </div>
            
            {/* Fade overlay for long content */}
            {isOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced version with line numbers (optional)
export function CodeCollapseAdvanced({ 
  title, 
  children, 
  defaultOpen = false,
  language,
  filename,
  showLineNumbers = false,
  maxHeight = '400px',
  type = 'code'
}: CodeCollapseProps & { 
  showLineNumbers?: boolean; 
  maxHeight?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);
  const config = typeConfig[type];
  const Icon = config.icon;

  const handleCopy = async () => {
    try {
      const textContent = extractTextFromChildren(children);
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const extractTextFromChildren = (children: React.ReactNode): string => {
    // Same implementation as above
    if (typeof children === 'string') return children;
    if (typeof children === 'number') return children.toString();
    if (React.isValidElement(children)) {
      if (children.type === 'pre' && children.props.children) {
        return extractTextFromChildren(children.props.children);
      }
      if (children.type === 'code' && children.props.children) {
        return extractTextFromChildren(children.props.children);
      }
      if (children.props && children.props.children) {
        return extractTextFromChildren(children.props.children);
      }
    }
    if (Array.isArray(children)) {
      return children.map(child => extractTextFromChildren(child)).join('');
    }
    return '';
  };

  return (
    <div className={`border ${config.borderColor} rounded-lg my-4 overflow-hidden shadow-sm`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${config.headerBg} flex items-center justify-between w-full p-4 text-left hover:opacity-90 transition-all duration-200`}
      >
        <div className="flex items-center space-x-3">
          <Icon className={`${config.iconColor} h-4 w-4`} />
          <div>
            <span className="font-medium text-gray-900">{title}</span>
            {filename && <span className="text-sm text-gray-500 ml-2">• {filename}</span>}
            {language && <span className="text-xs text-gray-400 ml-2 uppercase font-mono">{language}</span>}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {isOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              className="p-1.5 rounded hover:bg-white/50 transition-colors"
              title="Copy code"
            >
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-500" />}
            </button>
          )}
          <ChevronDown className={`h-4 w-4 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
        </div>
      </button>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`${config.bgColor} border-t ${config.borderColor}`}>
          <div 
            className="overflow-auto"
            style={{ maxHeight: isOpen ? maxHeight : '0px' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo component
export function CodeCollapseDemo() {
  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">CodeCollapse Component Examples</h2>
      
      <CodeCollapse 
        title="Project Setup" 
        type="command"
        language="bash"
      >
        <pre className="p-4 bg-gray-900 text-green-400 rounded text-sm overflow-x-auto">
          <code>{`# Create new Node.js project
mkdir chargebee-design-mcp
cd chargebee-design-mcp
npm init -y

# Install required dependencies
npm install @modelcontextprotocol/sdk
npm install --save-dev typescript @types/node ts-node`}</code>
        </pre>
      </CodeCollapse>

      <CodeCollapse 
        title="TypeScript Configuration" 
        type="config"
        filename="tsconfig.json"
        language="json"
      >
        <pre className="p-4 bg-gray-900 text-gray-300 rounded text-sm overflow-x-auto">
          <code>{`{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`}</code>
        </pre>
      </CodeCollapse>

      <CodeCollapse 
        title="Main MCP Server Implementation" 
        type="code"
        filename="src/index.ts"
        language="typescript"
        defaultOpen={false}
      >
        <pre className="p-4 bg-gray-900 text-gray-300 rounded text-sm overflow-x-auto">
          <code>{`import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

class ChargebeeDesignMCP {
  private server: Server;

  constructor() {
    this.server = new Server({
      name: 'chargebee-design-system',
      version: '1.0.0',
    }, {
      capabilities: {
        resources: {},
        tools: {},
      },
    });
  }
}`}</code>
        </pre>
      </CodeCollapse>

      <CodeCollapse 
        title="Build Output" 
        type="output"
        language="text"
      >
        <pre className="p-4 bg-gray-100 text-gray-800 rounded text-sm overflow-x-auto">
          <code>{`✅ Build completed successfully!
📁 Output directory: dist/
📄 Generated files:
  - index.js
  - index.d.ts
  - component-registry.js
  - style-guide.js

🚀 Ready to run: npm start`}</code>
        </pre>
      </CodeCollapse>
    </div>
  );
}

export default CodeCollapseDemo;