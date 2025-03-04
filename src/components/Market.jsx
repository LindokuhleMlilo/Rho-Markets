import React from 'react';
import { FiTrendingUp } from 'react-icons/fi'; 

const Market = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Wallet Info */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <div className="flex justify-between items-center">
          {/* Total Market Size */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-4xl font-bold">31,659,685.23</p>
              <div className="flex items-center justify-center space-x-2">
                <FiTrendingUp className="h-4 w-4 text-yellow-400" /> 
                <p className="text-gray-400 text-lg">Market Size</p>
              </div>
            </div>
          </div>

          {/* Total Borrowed */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-4xl font-bold">8,747,270.53</p>
              <div className="flex items-center justify-center space-x-2">
                <FiTrendingUp className="h-4 w-4 text-yellow-400" /> 
                <p className="text-gray-400 text-lg">Total Borrowed</p>
              </div>
            </div>
          </div>

          {/* Total Available */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-4xl font-bold">1,513,745.97</p>
              <div className="flex items-center justify-center space-x-2">
                <FiTrendingUp className="h-4 w-4 text-yellow-400" /> 
                <p className="text-gray-400 text-lg">Total Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Markets Section */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Markets</h2>
          <div className="flex space-x-4">
            <button className="text-yellow-400 hover:text-yellow-500">Single Assets</button>
            <button className="text-yellow-400 hover:text-yellow-500">All Assets</button>
            <button className="text-yellow-400 hover:text-yellow-500">ETH Category</button>
            <button className="text-yellow-400 hover:text-yellow-500">BTC Category</button>
            <button className="text-yellow-400 hover:text-yellow-500">Stablecoin</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left text-sm font-bold">Assets</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Collateral Type</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Max LTV</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Total Supplied</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Supply APY</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Borrow APY</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Total Borrowed</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Borrow Available</th>
              </tr>
            </thead>
            <tbody>
              {/* SCR */}
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/scr.png" alt="SCR" className="h-6" />
                  <span>SCR</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">50.00%</td>
                <td className="px-6 py-4">138,554.77</td>
                <td className="px-6 py-4 text-yellow-400">0.01%</td>
                <td className="px-6 py-4 text-yellow-400">2.06%</td>
                <td className="px-6 py-4">1,294.31</td>
                <td className="px-6 py-4">$42,373.74</td>
              </tr>

              {/* ETH */}
              <tr className="border-b border-gray-700 bg-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/eth.png" alt="ETH" className="h-6" />
                  <span>ETH</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">80.00%</td>
                <td className="px-6 py-4">543.67</td>
                <td className="px-6 py-4 text-yellow-400">1.78%</td>
                <td className="px-6 py-4 text-yellow-400">3.44%</td>
                <td className="px-6 py-4">377.62</td>
                <td className="px-6 py-4">$338,448.82</td>
              </tr>

              {/* STONE */}
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/stone.png" alt="STONE" className="h-6" />
                  <span>STONE</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">50.00%</td>
                <td className="px-6 py-4">141.61</td>
                <td className="px-6 py-4 text-yellow-400">0.25%</td>
                <td className="px-6 py-4 text-yellow-400">1.42%</td>
                <td className="px-6 py-4">37.04</td>
                <td className="px-6 py-4">$221,538.85</td>
              </tr>

              {/* USDC */}
              <tr className="border-b border-gray-700 bg-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/usdc.png" alt="USDC" className="h-6" />
                  <span>USDC</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">75.00%</td>
                <td className="px-6 py-4">1,797,711.88</td>
                <td className="px-6 py-4 text-yellow-400">18.97%</td>
                <td className="px-6 py-4 text-yellow-400">27.07%</td>
                <td className="px-6 py-4">1,737,681.71</td>
                <td className="px-6 py-4">$60,025.96</td>
              </tr>

              {/* USDT */}
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/usdt.png" alt="USDT" className="h-6" />
                  <span>USDT</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">70.00%</td>
                <td className="px-6 py-4">1,056,758.79</td>
                <td className="px-6 py-4 text-yellow-400">6.12%</td>
                <td className="px-6 py-4 text-yellow-400">9.04%</td>
                <td className="px-6 py-4">967,580.34</td>
                <td className="px-6 py-4">$82,377.62</td>
              </tr>

              {/* wstETH */}
              <tr className="border-b border-gray-700 bg-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/wsteth.png" alt="wstETH" className="h-6" />
                  <span>wstETH</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">70.00%</td>
                <td className="px-6 py-4">1,615.59</td>
                <td className="px-6 py-4 text-yellow-400">9.59%</td>
                <td className="px-6 py-4 text-yellow-400">14.61%</td>
                <td className="px-6 py-4">1,550.34</td>
                <td className="px-6 py-4">$120,951.52</td>
              </tr>

              {/* weETH */}
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/weeth.png" alt="weETH" className="h-6" />
                  <span>weETH</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">70.00%</td>
                <td className="px-6 py-4">121.98</td>
                <td className="px-6 py-4 text-yellow-400">1.55%</td>
                <td className="px-6 py-4 text-yellow-400">4.15%</td>
                <td className="px-6 py-4">84.12</td>
                <td className="px-6 py-4">$81,906.58</td>
              </tr>

              {/* wrsETH */}
              <tr className="border-b border-gray-700 bg-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/wrseth.png" alt="wrsETH" className="h-6" />
                  <span>wrsETH</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">60.00%</td>
                <td className="px-6 py-4">126.37</td>
                <td className="px-6 py-4 text-yellow-400">0.33%</td>
                <td className="px-6 py-4 text-yellow-400">2.72%</td>
                <td className="px-6 py-4">28.80</td>
                <td className="px-6 py-4">$206,538.40</td>
              </tr>

              {/* USDe */}
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/usde.png" alt="USDe" className="h-6" />
                  <span>USDe</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">70.00%</td>
                <td className="px-6 py-4">6,987.38</td>
                <td className="px-6 py-4 text-yellow-400">12.41%</td>
                <td className="px-6 py-4 text-yellow-400">23.19%</td>
                <td className="px-6 py-4">5,225.79</td>
                <td className="px-6 py-4">$1,759.00</td>
              </tr>

              {/* SolvBTC.b */}
              <tr className="border-b border-gray-700 bg-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/solvbtc.png" alt="SolvBTC.b" className="h-6" />
                  <span>SolvBTC.b</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">40.00%</td>
                <td className="px-6 py-4">0.49</td>
                <td className="px-6 py-4 text-yellow-400">0.04%</td>
                <td className="px-6 py-4 text-yellow-400">2.13%</td>
                <td className="px-6 py-4">0.01</td>
                <td className="px-6 py-4">$39,720.51</td>
              </tr>

              {/* ylstETH */}
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/ylsteth.png" alt="ylstETH" className="h-6" />
                  <span>ylstETH</span>
                </td>
                <td className="px-6 py-4">Close</td>
                <td className="px-6 py-4 text-yellow-400">40.00%</td>
                <td className="px-6 py-4">8,344.65</td>
                <td className="px-6 py-4 text-yellow-400">0%</td>
                <td className="px-6 py-4 text-yellow-400">2.02%</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">$0</td>
              </tr>

              {/* uniETH */}
              <tr className="border-b border-gray-700 bg-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/unieth.png" alt="uniETH" className="h-6" />
                  <span>uniETH</span>
                </td>
                <td className="px-6 py-4">Close</td>
                <td className="px-6 py-4 text-yellow-400">50.00%</td>
                <td className="px-6 py-4">0.12</td>
                <td className="px-6 py-4 text-yellow-400">0%</td>
                <td className="px-6 py-4 text-yellow-400">2.02%</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">$0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Market;