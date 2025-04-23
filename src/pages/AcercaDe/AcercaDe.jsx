import React from 'react';
import { Container, Typography, Card, CardContent, Link } from '@mui/material';

export default function AcercaDe() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Card sx={{ maxWidth: 600, margin: '0 auto' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Acerca del Desarrollador
          </Typography>
          <Typography variant="body1">
            <strong>Nombre:</strong> Edward's Stevent Parra Hurtatis
          </Typography>
          <Typography variant="body1">
            <strong>Programa:</strong> Ingeniería de Sistemas
          </Typography>
          <Typography variant="body1">
            <strong>Universidad:</strong> Universidad de la Amazonia
          </Typography>
          <Typography variant="body1">
            <strong>Semestre:</strong> 8°
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>GitHub:</strong>{' '}
            <Link href="https://github.com/parra2003-ing" target="_blank" rel="noopener">
              https://github.com/tu-usuario
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
