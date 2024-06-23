import React from 'react';

interface BlogImageProps {
    imagePath: string;
    altText?: string;
    width?: string;
    height?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ imagePath, altText = 'Blog Image', width = '100%', height = '100%' }) => {
    return (
        <div className="blog-image-container" style={{ width, height }}>
            <img src={imagePath} alt={altText} className="blog-image" style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default BlogImage;
