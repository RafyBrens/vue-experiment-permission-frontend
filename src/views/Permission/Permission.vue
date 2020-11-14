<template>
  <el-container direction="vertical"> 
    <el-header style="font-weight: bold; font-size: 20px;">
      Permission System
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="8">
        <ValidationObserver v-slot="{ invalid }">

    <form @submit.prevent="onSubmit">

          <div>
            <validation-provider rules="required" v-slot="{ errors }">
                <el-input
                 name="myinput" type="text"
                  placeholder="Nombre"
                  v-model="permission.employee.name"
                  @change="checkForInput">
                </el-input>
                <span>{{ errors[0] }}</span>
                <div style="height:20px;"></div>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors }">
                <el-input
                  name="myinput1" type="text"
                  placeholder="Apellido"
                  v-model="permission.employee.lastName" @change="checkForInput">
                </el-input>
                <span>{{ errors[0] }}</span>
                <div style="height:20px;"></div>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors }">
                <el-input
                  placeholder="Tipo Permisso"
                  v-model="permission.type">
                </el-input>
                <span>{{ errors[0] }}</span>
                <div style="height:20px;"></div>
              </validation-provider>

              <validation-provider rules="required" v-slot="{ errors }">
                <el-date-picker
                  style="width:100%;"
                  v-model="permission.date"
                  type="datetime"
                  placeholder="Fecha de solicitud de permiso"
                  :picker-options="pickerOptions" >
                </el-date-picker>
                <span>{{ errors[0] }}</span>
                <div style="height:30px;"></div>       
              </validation-provider>

              <el-button type="submit" :disabled="invalid" @click="save">Guardar</el-button>
              <div style="height:10px;"></div>
              <div style="color: red;"><span>{{errorMessage}}</span></div>
          </div>
          </form>
          </ValidationObserver>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts" src="./Permission.ts"/>
<style lang="scss" scoped src="./Permission.scss" ></style>