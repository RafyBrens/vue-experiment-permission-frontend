<template>
  <el-container direction="vertical"> 
    <el-header style="font-weight: bold; font-size: 20px;">
      Permission System
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="18">
          <el-table
            :data="permissionsData"
            style="width: 100%">
            <el-table-column
              prop="employee.name"
              label="Nombre"
              width="180">
            </el-table-column>
            <el-table-column
              prop="employee.lastName"
              label="Apellido"
              width="180">
            </el-table-column>
            <el-table-column
              prop="type"
              label="Tipo"
              width="180">
            </el-table-column>
            <el-table-column
              prop="date"
              label="Fecha"
              width="180">
            </el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button @click="edit(scope.$index, permissionsData)">Editar</el-button>
              </template>
            </el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button @click="remove(scope.$index, permissionsData)">Eliminar</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts" src="./PermissionList.ts"/>
<style lang="scss" scoped src="./PermissionList.scss" ></style>