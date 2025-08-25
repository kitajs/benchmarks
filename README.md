<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.4`
* __Run:__ Mon Aug 25 2025 01:36:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 47432.0    | 20.59        | 8.46          |
| kita                     | 1.1.36   | ✓      | 47372.8    | 20.61        | 8.49          |
| bare                     | v20.19.4 | ✗      | 47099.2    | 20.72        | 8.40          |
| fastify                  | 4.29.1   | ✓      | 46569.6    | 20.96        | 8.35          |
| polkadot                 | 1.0.0    | ✗      | 46481.6    | 21.02        | 8.29          |
| rayo                     | 1.4.6    | ✓      | 46098.4    | 21.19        | 8.22          |
| server-base              | 7.1.32   | ✗      | 45772.0    | 21.35        | 8.16          |
| connect                  | 3.7.0    | ✗      | 45565.8    | 21.44        | 8.13          |
| server-base-router       | 7.1.32   | ✓      | 45490.4    | 21.49        | 8.11          |
| h3-router                | 1.15.4   | ✓      | 44656.0    | 21.89        | 7.96          |
| connect-router           | 1.3.8    | ✓      | 43558.4    | 22.45        | 7.77          |
| h3                       | 1.15.4   | ✗      | 43301.6    | 22.59        | 7.72          |
| 0http                    | 3.5.3    | ✓      | 42180.8    | 23.22        | 7.52          |
| restana                  | 4.9.9    | ✓      | 37895.0    | 25.89        | 6.76          |
| koa                      | 2.16.2   | ✗      | 37804.2    | 25.95        | 6.74          |
| hono                     | 4.9.4    | ✓      | 37715.2    | 26.01        | 6.19          |
| take-five                | 2.0.0    | ✓      | 35781.0    | 27.43        | 12.86         |
| restify                  | 11.1.0   | ✓      | 35014.6    | 28.05        | 6.31          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34901.8    | 28.15        | 6.22          |
| koa-router               | 12.0.1   | ✓      | 33332.6    | 29.49        | 5.94          |
| hapi                     | 21.4.3   | ✓      | 32225.2    | 30.52        | 5.75          |
| fastify-big-json         | 4.29.1   | ✓      | 11924.4    | 83.29        | 137.19        |
| express                  | 4.21.2   | ✓      | 11024.0    | 90.16        | 1.97          |
| express-with-middlewares | 4.21.2   | ✓      | 10273.8    | 96.75        | 3.82          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
