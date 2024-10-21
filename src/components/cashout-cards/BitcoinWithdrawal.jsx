'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function BitcoinWithdrawal({ onClose }) {
  const [withdrawalMethod, setWithdrawalMethod] = useState('bitcoin');
  const [amount, setAmount] = useState(0);

  return (
    <Card className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#1E2132] p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <img src="/bitcoin.svg" alt="Bitcoin" className="w-8 h-8 mr-2" />
            Bitcoin
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-400 mb-4">
          Crypto withdrawals take a few minutes to be sent. New users have to earn $2.00 in order to make their first withdrawal.
        </p>

        <RadioGroup defaultValue="bitcoin" className="mb-4" onValueChange={setWithdrawalMethod}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bitcoin" id="bitcoin" />
            <Label htmlFor="bitcoin" className="text-white">Bitcoin address</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="stake" id="stake" />
            <Label htmlFor="stake" className="text-white">Stake username</Label>
            <span className="text-green-500 text-sm">15% Bonus</span>
          </div>
        </RadioGroup>

        <div className="mb-4">
          <Label htmlFor="bitcoin-address" className="text-white">
            {withdrawalMethod === 'bitcoin' ? 'Bitcoin Address' : 'Stake Username'}
          </Label>
          <Input 
            id="bitcoin-address" 
            placeholder={withdrawalMethod === 'bitcoin' ? "Enter Bitcoin Address..." : "Enter Stake Username..."}
            className="mt-1" 
          />
          <p className="text-gray-400 text-sm mt-1">
            {withdrawalMethod === 'bitcoin' 
              ? "The Bitcoin Address for your Bitcoin Wallet." 
              : "Your Stake.com username."}
          </p>
        </div>

        <Button className="w-full mb-4">Save address</Button>

        <div className="mb-4">
          <Label htmlFor="amount" className="text-white">Amount in USD</Label>
          <Input 
            id="amount" 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            className="mt-1" 
          />
          <div className="flex justify-between mt-1">
            <span className="text-gray-400 text-sm">Minimum is $5.00</span>
            <span className="text-gray-400 text-sm">Max amount $68,803.36 • BTC rate</span>
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <span className="text-white">Fee</span>
          <span className="text-white">$1.50</span>
        </div>

        <Button className="w-full bg-green-500 hover:bg-green-600">Withdraw</Button>
      </div>
    </Card>
  );
}