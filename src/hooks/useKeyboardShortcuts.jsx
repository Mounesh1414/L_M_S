import { useEffect } from 'react';

const useKeyboardShortcuts = (shortcuts = {}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const ctrl = event.ctrlKey || event.metaKey;
      const shift = event.shiftKey;
      const alt = event.altKey;

      // Build shortcut string
      let shortcut = '';
      if (ctrl) shortcut += 'ctrl+';
      if (shift) shortcut += 'shift+';
      if (alt) shortcut += 'alt+';
      shortcut += key;

      // Check if shortcut exists and execute
      if (shortcuts[shortcut]) {
        event.preventDefault();
        shortcuts[shortcut]();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};

// Common keyboard shortcuts hook for LMS
export const useLMSKeyboardShortcuts = (navigate, showToast) => {
  const shortcuts = {
    'ctrl+k': () => {
      showToast?.('Search opened (Ctrl+K)', 'info');
      // Focus on search input if exists
      const searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i]');
      searchInput?.focus();
    },
    'ctrl+/': () => {
      showToast?.('Keyboard shortcuts (Ctrl+/)', 'info');
    },
    'ctrl+h': () => {
      navigate?.('/');
      showToast?.('Navigated to home', 'success');
    },
    'ctrl+n': () => {
      showToast?.('Create new (Ctrl+N)', 'info');
    },
    'ctrl+s': () => {
      showToast?.('Save (Ctrl+S)', 'success');
    },
    'esc': () => {
      // Close modals/dropdowns
      const closeButtons = document.querySelectorAll('[aria-label="close"], [aria-label="Close"]');
      closeButtons[0]?.click();
    },
  };

  useKeyboardShortcuts(shortcuts);
};

export default useKeyboardShortcuts;

// Helper: Keyboard Shortcuts Panel
export const KeyboardShortcutsPanel = ({ onClose }) => {
  const shortcuts = [
    { keys: ['Ctrl', 'K'], description: 'Quick search' },
    { keys: ['Ctrl', 'N'], description: 'Create new' },
    { keys: ['Ctrl', 'S'], description: 'Save' },
    { keys: ['Ctrl', 'H'], description: 'Go to home' },
    { keys: ['Ctrl', '/'], description: 'Show shortcuts' },
    { keys: ['Esc'], description: 'Close modal/panel' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Keyboard Shortcuts</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="space-y-2">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <span className="text-gray-700">{shortcut.description}</span>
              <div className="flex items-center gap-1">
                {shortcut.keys.map((key, i) => (
                  <span key={i}>
                    <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">
                      {key}
                    </kbd>
                    {i < shortcut.keys.length - 1 && <span className="mx-1 text-gray-400">+</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
