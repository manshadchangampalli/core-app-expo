import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LiquidGlassContainerView } from "@callstack/liquid-glass";

interface SearchBarProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
}

export default function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchQuery);
        }
    };

    return (
        <LiquidGlassContainerView style={{ borderRadius: 100, borderWidth: 1, borderColor: '#545454', paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }} >
            <TextInput
                className="flex-1 text-white px-4 py-4 text-lg"
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                autoFocus={false}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
                style={{ paddingRight: 12 }}
            />
            <TouchableOpacity className="pr-4">
                <Ionicons name="search" size={22} color="#545454" />
            </TouchableOpacity>
        </LiquidGlassContainerView>
    );
}

