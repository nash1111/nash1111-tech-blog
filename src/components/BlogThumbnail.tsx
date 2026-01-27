import React from 'react';

interface BlogThumbnailProps {
    imagePath: string;
    altText?: string;
    height?: string;
}


export const BlogThumbnail: React.FC<BlogThumbnailProps> = ({ imagePath, altText = 'Blog Image', height = 'auto' }) => {
    return (
        <div className="blog-thumbnail-container">
            <img src={imagePath} alt={altText} className="object-cover" style={{ width: '100%', height }} />
        </div>
    );
};
