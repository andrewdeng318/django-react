#!/bin/bash

# 确保在项目根目录
cd "$(dirname "$0")/.."

# 删除已存在的frontend目录（如果有）
rm -rf frontend

# 创建新的React项目
npx create-react-app frontend

# 进入frontend目录
cd frontend

# 安装必要的依赖
npm install axios @mui/material @emotion/react @emotion/styled

# 创建components目录
mkdir -p src/components

# 复制原有的组件文件
cat > src/components/Book.js << 'EOL'
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const Book = ({ book }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          作者: {book.author}
        </Typography>
        <Typography variant="body2">
          ISBN: {book.isbn}
          <br />
          出版日期: {book.publication_date}
          <br />
          价格: ¥{book.price}
        </Typography>
        {book.description && (
          <Typography variant="body2" sx={{ mt: 1.5 }}>
            描述: {book.description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">查看详情</Button>
      </CardActions>
    </Card>
  );
};

export default Book;
EOL

cat > src/components/BookList.js << 'EOL'
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/books/');
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError('获取图书列表失败');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error" sx={{ mt: 4 }}>{error}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4 }}>图书列表</Typography>
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Book book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookList;
EOL

cat > src/App.js << 'EOL'
import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import BookList from './components/BookList';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            图书管理系统
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <BookList />
      </Container>
    </>
  );
}

export default App;
EOL

echo "React前端项目创建完成！"
echo "请运行以下命令启动项目："
echo "cd frontend"
echo "npm start"
