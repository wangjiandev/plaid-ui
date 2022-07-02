<script setup lang="ts"></script>

<template>
  <BaseBox>
    <n-card>
      <n-gradient-text :size="24" type="success">
        养护计划/总计划/计划编制
      </n-gradient-text>
    </n-card>

    <n-card mt-4>
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>Abandon</th>
            <th>Abormal</th>
            <th>Abolish</th>
            <th>...</th>
            <th>万事开头难</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>放弃</td>
            <td>反常的</td>
            <td>彻底废除</td>
            <td>...</td>
            <td>干！我刚才背的是啥</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </n-table>
    </n-card>
  </BaseBox>
</template>

<style lang="scss" scoped></style>
