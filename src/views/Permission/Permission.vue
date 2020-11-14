<template>
  <el-container direction="vertical"> 
    <el-header style="font-weight: bold; font-size: 20px;">
      Permission System
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <div>
            <el-input
              placeholder="Nombre"
              v-model="permission.employee.name"
              @change="checkForInput">
            </el-input>
            <div style="height:20px;"></div>
            <el-input
              placeholder="Apellido"
              v-model="permission.employee.lastName">
            </el-input>
            <div style="height:20px;"></div>
             <el-input
              placeholder="Tipo Permisso"
              v-model="permission.type">
            </el-input>
            <div style="height:20px;"></div>
            <el-date-picker
              style="width:100%;"
              v-model="permission.date"
              type="datetime"
              placeholder="Fecha de solicitud de permiso"
              :picker-options="pickerOptions" >
            </el-date-picker>
            <div style="height:30px;"></div>
            <el-button disabled='isDisabled' @click="save">Guardar</el-button>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts" src="./Permission.ts"/>
<style lang="scss" scoped src="./Permission.scss" ></style>