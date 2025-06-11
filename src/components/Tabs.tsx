'use client'
import React, { useState, createContext, useContext } from 'react';

// Types
interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'pills' | 'underline' | 'buttons';
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

// Context
const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
};

// Main Tabs Component
export function Tabs({ 
  defaultValue, 
  children, 
  className = '',
  orientation = 'horizontal'
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, orientation }}>
      <div className={`w-full ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// Tabs List Component
export function TabsList({ 
  children, 
  className = '',
  variant = 'default'
}: TabsListProps) {
  const { orientation } = useTabsContext();
  
  const variantStyles = {
    default: 'bg-gray-100 p-1 rounded-lg',
    pills: 'space-x-1',
    underline: 'border-b border-gray-200',
    buttons: 'space-x-2'
  };

  const orientationStyles = orientation === 'vertical' 
    ? 'flex-col space-y-1 space-x-0' 
    : 'flex-row';

  return (
    <div className={`
      inline-flex 
      ${orientationStyles}
      ${variantStyles[variant]}
      ${className}
    `}>
      {children}
    </div>
  );
}

// Tabs Trigger Component
export function TabsTrigger({ 
  value, 
  children, 
  className = '',
  disabled = false
}: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  const baseStyles = `
    relative
    px-3 py-2 
    text-sm font-medium 
    transition-all duration-200 
    focus:outline-none 
    focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
  `;

  const activeStyles = isActive
    ? 'bg-white text-gray-900 shadow-sm'
    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50';

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      disabled={disabled}
      onClick={() => !disabled && setActiveTab(value)}
      className={`${baseStyles} ${activeStyles} ${className}`}
    >
      {children}
      
      {/* Active indicator for underline variant */}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
      )}
    </button>
  );
}

// Tabs Content Component
export function TabsContent({ 
  value, 
  children, 
  className = ''
}: TabsContentProps) {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      className={`
        mt-4 
        focus:outline-none 
        animate-in 
        fade-in-0 
        duration-200
        ${className}
      `}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

// Enhanced Tabs with different variants
export function TabsUnderline({ defaultValue, children, className = '' }: TabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className={className}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === TabsListUnderline) {
          return React.cloneElement(child as React.ReactElement<any>);
        }
        return child;
      })}
    </Tabs>
  );
}

export function TabsListUnderline({ children, className = '' }: TabsListProps) {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <nav className="flex space-x-8" aria-label="Tabs">
        {children}
      </nav>
    </div>
  );
}

export function TabsTriggerUnderline({ value, children, className = '' }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200
        ${isActive 
          ? 'border-blue-500 text-blue-600' 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// Pills variant
export function TabsPills({ defaultValue, children, className = '' }: TabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className={className}>
      {children}
    </Tabs>
  );
}

export function TabsListPills({ children, className = '' }: TabsListProps) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTriggerPills({ value, children, className = '' }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
        ${isActive 
          ? 'bg-blue-100 text-blue-700 shadow-sm' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// Vertical Tabs
export function TabsVertical({ defaultValue, children, className = '' }: TabsProps) {
  return (
    <Tabs defaultValue={defaultValue} orientation="vertical" className={className}>
      <div className="flex space-x-6">
        {children}
      </div>
    </Tabs>
  );
}

export function TabsListVertical({ children, className = '' }: TabsListProps) {
  return (
    <div className={`flex flex-col space-y-1 min-w-[200px] ${className}`}>
      {children}
    </div>
  );
}

export function TabsTriggerVertical({ value, children, className = '' }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
        ${isActive 
          ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function TabsContentVertical({ value, children, className = '' }: TabsContentProps) {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div className={`flex-1 ${className}`}>
      {children}
    </div>
  );
}

// Demo component showing all variants
export function TabsDemo() {
  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Tabs Component Examples</h2>
      
      {/* Default Tabs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Tabs</h3>
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
            <TabsTrigger value="validation">Validation</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="components" className="space-y-4">
            <p><strong>Intelligent Component Library Access</strong>: AI tools can query and understand our complete component catalog, including props, variants, and usage contexts.</p>
          </TabsContent>
          
          <TabsContent value="suggestions" className="space-y-4">
            <p><strong>Context-Aware Recommendations</strong>: Based on the use case (dashboard, billing, settings), the server suggests the most appropriate components and configurations.</p>
          </TabsContent>
          
          <TabsContent value="validation" className="space-y-4">
            <p><strong>Real-time Design Validation</strong>: Any generated code is automatically checked against our style guide and design system rules.</p>
          </TabsContent>
          
          <TabsContent value="patterns" className="space-y-4">
            <p><strong>Design Pattern Recognition</strong>: AI understands and applies established Chargebee design patterns for common interfaces.</p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Underline Tabs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Underline Tabs</h3>
        <TabsUnderline defaultValue="setup">
          <TabsListUnderline>
            <TabsTriggerUnderline value="setup">Setup</TabsTriggerUnderline>
            <TabsTriggerUnderline value="config">Configuration</TabsTriggerUnderline>
            <TabsTriggerUnderline value="usage">Usage</TabsTriggerUnderline>
          </TabsListUnderline>
          
          <TabsContent value="setup">
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Project Setup</h4>
              <p>Initialize your MCP server project with the required dependencies and folder structure.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="config">
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Configuration</h4>
              <p>Set up your design system data files and configure the MCP server settings.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="usage">
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Usage Examples</h4>
              <p>Learn how to interact with your design system through AI-powered queries.</p>
            </div>
          </TabsContent>
        </TabsUnderline>
      </div>

      {/* Pills Tabs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Pills Tabs</h3>
        <TabsPills defaultValue="before">
          <TabsListPills>
            <TabsTriggerPills value="before">Before MCP</TabsTriggerPills>
            <TabsTriggerPills value="after">After MCP</TabsTriggerPills>
            <TabsTriggerPills value="results">Results</TabsTriggerPills>
          </TabsListPills>
          
          <TabsContent value="before">
            <div className="mt-4 p-4 border-l-4 border-red-500 bg-red-50">
              <ul className="space-y-2 text-sm">
                <li>• Developers spent excessive time translating AI components</li>
                <li>• Multiple design review cycles for consistency</li>
                <li>• Misaligned stakeholder expectations</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="after">
            <div className="mt-4 p-4 border-l-4 border-green-500 bg-green-50">
              <ul className="space-y-2 text-sm">
                <li>• Seamless design-to-dev handoffs</li>
                <li>• Consistent component usage across projects</li>
                <li>• AI tools generate production-ready code</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="results">
            <div className="mt-4 p-4 border-l-4 border-blue-500 bg-blue-50">
              <ul className="space-y-2 text-sm">
                <li>• <strong>40% reduction</strong> in development time</li>
                <li>• <strong>80% decrease</strong> in design system violations</li>
                <li>• <strong>100% team adoption</strong> of internal workflow</li>
              </ul>
            </div>
          </TabsContent>
        </TabsPills>
      </div>

      {/* Vertical Tabs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Vertical Tabs</h3>
        <TabsVertical defaultValue="architecture">
          <TabsListVertical>
            <TabsTriggerVertical value="architecture">Architecture</TabsTriggerVertical>
            <TabsTriggerVertical value="features">Key Features</TabsTriggerVertical>
            <TabsTriggerVertical value="benefits">Benefits</TabsTriggerVertical>
          </TabsListVertical>
          
          <TabsContentVertical value="architecture">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Technical Architecture</h4>
              <p>The MCP server provides AI models with real-time access to component libraries, style guides, design patterns, and usage guidelines through a structured protocol interface.</p>
            </div>
          </TabsContentVertical>
          
          <TabsContentVertical value="features">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Core Features</h4>
              <ul className="space-y-1">
                <li>• Intelligent component suggestions</li>
                <li>• Real-time style guide enforcement</li>
                <li>• Pattern recognition and application</li>
                <li>• Developer-friendly code output</li>
              </ul>
            </div>
          </TabsContentVertical>
          
          <TabsContentVertical value="benefits">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Business Impact</h4>
              <p>Dramatic improvements in team velocity, design consistency, and stakeholder satisfaction through automated design system compliance.</p>
            </div>
          </TabsContentVertical>
        </TabsVertical>
      </div>
    </div>
  );
}

export default TabsDemo;