import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LiquidGlassContainerView, LiquidGlassView } from "@callstack/liquid-glass";

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
        <LiquidGlassView interactive effect="clear" style={{ borderRadius: 100, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }} >
            <TextInput
                className="flex-1 text-white px-4 py-4 text-lg"
                placeholder={placeholder}
                placeholderTextColor="#cccccc"
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
                style={{ paddingRight: 12 }}
            />
            <TouchableOpacity className="pr-4">
                <Ionicons name="search" size={22} color="#cccccc" />
            </TouchableOpacity>
        </LiquidGlassView>
    );
}

