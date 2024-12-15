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
