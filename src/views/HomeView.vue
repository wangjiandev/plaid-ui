<script setup lang="ts">
</script>

<template>
  <main>
    <n-card>
      <n-space>
        <n-button tertiary>
          Default
        </n-button>
        <n-button tertiary type="primary">
          Primary
        </n-button>
        <n-button tertiary type="info">
          Info
        </n-button>
        <n-button tertiary type="success">
          Success
        </n-button>
        <n-button tertiary type="warning">
          Warning
        </n-button>
        <n-button tertiary type="error">
          Error
        </n-button>
        <n-button tertiary round>
          Default
        </n-button>
        <n-button tertiary round type="primary">
          Primary
        </n-button>
        <n-button tertiary round type="info">
          Info
        </n-button>
        <n-button tertiary round type="success">
          Success
        </n-button>
        <n-button tertiary round type="warning">
          Warning
        </n-button>
        <n-button tertiary round type="error">
          Error
        </n-button>
        <n-button tertiary circle>
          <template #icon>
            <n-icon><cash-icon /></n-icon>
          </template>
        </n-button>
        <n-button tertiary circle type="primary">
          <template #icon>
            <n-icon><cash-icon /></n-icon>
          </template>
        </n-button>
        <n-button tertiary circle type="info">
          <template #icon>
            <n-icon><cash-icon /></n-icon>
          </template>
        </n-button>
        <n-button tertiary circle type="success">
          <n-icon><cash-icon /></n-icon>
        </n-button>
        <n-button tertiary circle type="warning">
          <template #icon>
            <n-icon><cash-icon /></n-icon>
          </template>
        </n-button>
        <n-button tertiary circle type="error">
          <template #icon>
            <n-icon><cash-icon /></n-icon>
          </template>
        </n-button>
      </n-space>
    </n-card>
    <n-card mt-10>
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
  </main>
</template>
