<template>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Productos</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!-- <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"> -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        crossorigin="anonymous"
      />
      <!------ Include the above in your HEAD tag ---------->

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        media="screen"
        href="../css/productos.css"
      />
    </head>

    <body>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" style="right: 10px" href="/productos"
              >Mercado</a
            >
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
              role="navigation"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="true" href="/login"
                    >Ingresar</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="true"
                    href="/registro"
                    >Registrarse</a
                  >
                </li>
                <li class="nav-item">
                  <template>
                    <v-row>
                      <v-col cols="auto">
                        <v-dialog
                          transition="dialog-top-transition"
                          max-width="600"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <a
                              class="nav-link1 active"
                              href="#"
                              id="acercaDe"
                              v-bind="attrs"
                              v-on="on"
                            >
                              Acerca de</a
                            >
                          </template>
                          <template v-slot:default="dialog">
                            <v-card>
                              <v-toolbar color="bg-dark" dark class="text-h4"
                                >Acerca de</v-toolbar
                              >
                              <v-card-text>
                                <div class="text-h5 pa-6">
                                  Proyecto desarrollado Por: <br />
                                  Diego Vega <br />
                                  Jorge Rojas <br />
                                  Gustavo Jaramillo <br />
                                  Javier Felipe<br />
                                  Julian Garzon
                                </div>
                              </v-card-text>
                              <v-card-actions class="justify-end">
                                <v-btn
                                  color="primary"
                                  @click="dialog.value = false"
                                  >Cerrar</v-btn
                                >
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </v-col>
                    </v-row>
                  </template>
                </li>
              </ul>
              <form class="d-flex" style="margin-top:13px;">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Buscar"
                />
                <button class="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </body>
  </html>
</template>

<script>
export default {};
</script>

<style>
.nav-link1 {
  display: block;
  padding: 0rem 1rem;
  color: white !important;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
</style>
