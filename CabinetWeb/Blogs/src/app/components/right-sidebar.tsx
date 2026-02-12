import { Heart } from "lucide-react";

export function RightSidebar() {
  return (
  <aside className="w-[400px] flex-shrink-0 pt-6 px-5 pb-5 space-y-5 self-start sticky top-5">
      {/* FREE 3D Kitchen Design Card */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4 space-y-3">
          <div className="relative bg-gray-100 rounded aspect-video flex items-center justify-center">
            <Heart className="w-12 h-12 text-gray-300" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">FREE 3D Kitchen Design</h3>
            <p className="text-sm text-gray-600">
              Visualize your dream kitchen with our free 3D design service.
            </p>
            <button className="w-full py-2 px-4 border border-gray-900 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              GET STARTED →
            </button>
          </div>
        </div>
      </div>

      {/* 1 FREE Door Sample Card */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4 space-y-3">
          <div className="relative bg-gray-100 rounded aspect-video flex items-center justify-center">
            <Heart className="w-12 h-12 text-gray-300" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">1 FREE Door Sample</h3>
            <p className="text-sm text-gray-600">
              Order a free cabinet door sample to see the quality for yourself.
            </p>
            <button className="w-full py-2 px-4 border border-gray-900 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              ORDER NOW →
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
