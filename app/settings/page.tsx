"use client";

import { useState, useEffect } from "react";
import { Volume2, Moon, Sun, Save, Bell, Globe } from "lucide-react";

interface Settings {
  theme: "light" | "dark" | "auto";
  audioVolume: number;
  autoPlayAudio: boolean;
  showNotifications: boolean;
  language: string;
  practiceReminders: boolean;
  defaultTempo: number;
  leftHandedMode: boolean;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    theme: "dark",
    audioVolume: 80,
    autoPlayAudio: true,
    showNotifications: false,
    language: "en",
    practiceReminders: false,
    defaultTempo: 120,
    leftHandedMode: false,
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem("guitarGuideSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("guitarGuideSettings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Settings</h1>
          <p className="text-gray-300 text-lg">
            Customize your Guitar Guide experience
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sun size={24} />
              Appearance
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 block mb-2">Theme</label>
                <select
                  value={settings.theme}
                  onChange={(e) => updateSetting("theme", e.target.value as Settings["theme"])}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto (System)</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.leftHandedMode}
                    onChange={(e) => updateSetting("leftHandedMode", e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-700 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-300">Left-handed Mode (Mirror chord diagrams)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Volume2 size={24} />
              Audio
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 block mb-2">
                  Master Volume: {settings.audioVolume}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.audioVolume}
                  onChange={(e) => updateSetting("audioVolume", Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoPlayAudio}
                    onChange={(e) => updateSetting("autoPlayAudio", e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-700 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-300">Auto-play chord audio on selection</span>
                </label>
              </div>

              <div>
                <label className="text-gray-300 block mb-2">
                  Default Tempo (BPM): {settings.defaultTempo}
                </label>
                <input
                  type="range"
                  min="60"
                  max="180"
                  value={settings.defaultTempo}
                  onChange={(e) => updateSetting("defaultTempo", Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Bell size={24} />
              Notifications
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showNotifications}
                    onChange={(e) => updateSetting("showNotifications", e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-700 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-300">Show browser notifications</span>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.practiceReminders}
                    onChange={(e) => updateSetting("practiceReminders", e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-700 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-300">Daily practice reminders</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe size={24} />
              Language & Region
            </h2>
            
            <div>
              <label className="text-gray-300 block mb-2">Language</label>
              <select
                value={settings.language}
                onChange={(e) => updateSetting("language", e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="pt">Português</option>
                <option value="ja">日本語</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save size={20} />
              {saved ? "Saved!" : "Save Settings"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}