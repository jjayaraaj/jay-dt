import React from 'react';
import { Info, AlertTriangle, CheckCircle, XCircle, Lightbulb, Zap } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error' | 'tip' | 'note';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig = {
  info: {
    icon: Info,
    bgColor: 'bg-blue-50',
    borderColor: 'border-l-blue-500',
    textColor: 'text-blue-900',
    iconColor: 'text-blue-600',
    titleColor: 'text-blue-800'
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-yellow-50',
    borderColor: 'border-l-yellow-500',
    textColor: 'text-yellow-900',
    iconColor: 'text-yellow-600',
    titleColor: 'text-yellow-800'
  },
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-50',
    borderColor: 'border-l-green-500',
    textColor: 'text-green-900',
    iconColor: 'text-green-600',
    titleColor: 'text-green-800'
  },
  error: {
    icon: XCircle,
    bgColor: 'bg-red-50',
    borderColor: 'border-l-red-500',
    textColor: 'text-red-900',
    iconColor: 'text-red-600',
    titleColor: 'text-red-800'
  },
  tip: {
    icon: Lightbulb,
    bgColor: 'bg-purple-50',
    borderColor: 'border-l-purple-500',
    textColor: 'text-purple-900',
    iconColor: 'text-purple-600',
    titleColor: 'text-purple-800'
  },
  note: {
    icon: Zap,
    bgColor: 'bg-gray-50',
    borderColor: 'border-l-gray-500',
    textColor: 'text-gray-900',
    iconColor: 'text-gray-600',
    titleColor: 'text-gray-800'
  }
};

const defaultTitles = {
  info: 'Info',
  warning: 'Warning',
  success: 'Success',
  error: 'Error',
  tip: 'Tip',
  note: 'Note'
};

export function Callout({ 
  type = 'info', 
  title, 
  children, 
  className = '' 
}: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;
  const displayTitle = title || defaultTitles[type];

  return (
    <div className={`
      ${config.bgColor} 
      ${config.borderColor} 
      ${config.textColor}
      border-l-4 
      rounded-r-lg 
      p-4 
      my-6 
      shadow-sm
      ${className}
    `}>
      <div className="flex items-start space-x-3">
        <Icon className={`${config.iconColor} h-5 w-5 mt-0.5 flex-shrink-0`} />
        <div className="flex-1 min-w-0">
          {title !== '' && (
            <h4 className={`${config.titleColor} font-semibold text-sm mb-2`}>
              {displayTitle}
            </h4>
          )}
          <div className="prose prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo component showing all variants
export function CalloutDemo() {
  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Callout Component Examples</h2>
      
      <Callout type="info" title="Project Information">
        This case study showcases how I developed a custom Model Context Protocol (MCP) server to solve a critical workflow issue at Chargebee, resulting in 40% faster development cycles.
      </Callout>

      <Callout type="warning" title="Prerequisites Required">
        <strong>Prerequisites:</strong> Node.js 18+, basic understanding of React and design systems, access to your component library documentation, and an MCP-compatible AI tool.
      </Callout>

      <Callout type="success" title="Implementation Results">
        <ul>
          <li><strong>40% reduction</strong> in developer time from prototype to production</li>
          <li><strong>80% decrease</strong> in design system deviations</li>
          <li><strong>Complete migration</strong> of designers from external AI tools</li>
        </ul>
      </Callout>

      <Callout type="error" title="Common Pitfalls">
        Make sure to validate your component code against the actual design system. Using colors or spacing not in your palette will cause validation failures.
      </Callout>

      <Callout type="tip" title="Pro Tip">
        Use context-specific component suggestions to get the most relevant recommendations for your use case (dashboard, billing, settings, etc.).
      </Callout>

      <Callout type="note">
        The MCP server architecture is designed to scale with your design system. The modular structure makes it easy to add new features and integrations.
      </Callout>

      {/* Example without title */}
      <Callout type="info" title="">
        This callout doesn't have a title, just the content with an icon.
      </Callout>
    </div>
  );
}
