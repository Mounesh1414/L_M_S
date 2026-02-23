import React from 'react';

export const CardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
  </div>
);

export const TableSkeleton = ({ rows = 5, columns = 4 }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
    <div className="p-6">
      <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="space-y-3">
        {[...Array(rows)].map((_, i) => (
          <div key={i} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {[...Array(columns)].map((_, j) => (
              <div key={j} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ListSkeleton = ({ items = 5 }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
    {[...Array(items)].map((_, i) => (
      <div key={i} className="flex items-center space-x-4 mb-4 last:mb-0">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

export const DashboardSkeleton = () => (
  <div className="p-6 space-y-6">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TableSkeleton />
      <ListSkeleton />
    </div>
  </div>
);
